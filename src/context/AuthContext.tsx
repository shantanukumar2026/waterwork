"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  roleType: "engineer" | "contractor" | "distributor";
  licenseOrId?: string;
  tier: string;
  avatarInitials: string;
  savedSubmittals: string[];
  recentQuotes: Array<{
    id: string;
    project: string;
    itemsCount: number;
    status: "Pending Review" | "Engineering Stamped" | "Dispatched";
    date: string;
    totalEst?: string;
  }>;
}

export interface RegisterData {
  name: string;
  email: string;
  password?: string;
  company: string;
  roleType: "engineer" | "contractor" | "distributor";
  licenseOrId?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<{ success: boolean; error?: string }>;
  register: (data: RegisterData) => Promise<{ success: boolean; error?: string }>;
  demoLogin: (role: "engineer" | "contractor" | "distributor") => void;
  logout: () => void;
  saveSubmittal: (submittalId: string) => void;
  removeSubmittal: (submittalId: string) => void;
}

const DEMO_USERS: Record<string, User> = {
  engineer: {
    id: "usr_eng_01",
    name: "Sarah Jenkins, P.E.",
    email: "s.jenkins@austinwater.gov",
    company: "City of Austin Water Utility",
    role: "Lead Municipal Engineer",
    roleType: "engineer",
    licenseOrId: "TX P.E. #104829",
    tier: "Municipal Authority (Direct Stamped)",
    avatarInitials: "SJ",
    savedSubmittals: ["sub-awwa-c515", "sub-astm-a536", "sub-curb-box-mn"],
    recentQuotes: [
      {
        id: "RFQ-2026-881",
        project: "Austin Central Interceptor Phase 2",
        itemsCount: 48,
        status: "Engineering Stamped",
        date: "2026-10-24",
        totalEst: "$142,500.00"
      },
      {
        id: "RFQ-2026-904",
        project: "North Loop 16-Inch Water Main Extension",
        itemsCount: 22,
        status: "Pending Review",
        date: "2026-10-29",
        totalEst: "$68,900.00"
      }
    ]
  },
  contractor: {
    id: "usr_con_02",
    name: "Marcus Vance",
    email: "mvance@texastrenching.com",
    company: "Texas Trenching & Underground LLC",
    role: "Senior Project Manager",
    roleType: "contractor",
    licenseOrId: "TX Utility Contractor #UC-44910",
    tier: "Contractor Wholesale (Tier 2)",
    avatarInitials: "MV",
    savedSubmittals: ["sub-wedge-restraint", "sub-gate-valves", "sub-valve-box-series"],
    recentQuotes: [
      {
        id: "RFQ-2026-792",
        project: "San Antonio Parkway Pipeline Phase 3",
        itemsCount: 84,
        status: "Dispatched",
        date: "2026-10-18",
        totalEst: "$210,000.00"
      }
    ]
  },
  distributor: {
    id: "usr_dst_03",
    name: "Elena Rostova",
    email: "elena@gulfcoastpiping.com",
    company: "Gulf Coast Waterworks Supply Co.",
    role: "VP of Regional Procurement",
    roleType: "distributor",
    licenseOrId: "AWWA Master Dist #9924-A",
    tier: "Premier Direct Stocking Distributor",
    avatarInitials: "ER",
    savedSubmittals: ["sub-complete-catalog", "sub-di-fittings", "sub-meter-boxes"],
    recentQuotes: [
      {
        id: "PO-2026-4402",
        project: "Q4 Houston Regional Hub Inventory Restock",
        itemsCount: 320,
        status: "Dispatched",
        date: "2026-10-15",
        totalEst: "$580,000.00"
      },
      {
        id: "PO-2026-4519",
        project: "Dallas / Fort Worth Emergency Staging Batch",
        itemsCount: 110,
        status: "Engineering Stamped",
        date: "2026-10-28",
        totalEst: "$195,400.00"
      }
    ]
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("h2_user_session");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      // ignore storage access errors
    } finally {
      setIsLoading(false);
    }
  }, []);

  const persistUser = (u: User | null) => {
    setUser(u);
    try {
      if (u) {
        localStorage.setItem("h2_user_session", JSON.stringify(u));
      } else {
        localStorage.removeItem("h2_user_session");
      }
    } catch {
      // storage unavailable
    }
  };

  const login = async (email: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    // Simulate brief network authentication
    await new Promise((resolve) => setTimeout(resolve, 350));

    const cleanEmail = email.trim().toLowerCase();
    
    // Check if matches known demo or fallback to dynamic user
    const matched = Object.values(DEMO_USERS).find((d) => d.email.toLowerCase() === cleanEmail);
    if (matched) {
      persistUser(matched);
      setIsLoading(false);
      return { success: true };
    }

    if (!cleanEmail.includes("@")) {
      setIsLoading(false);
      return { success: false, error: "Please enter a valid work or engineering email address." };
    }

    // Dynamic user session
    const parts = cleanEmail.split("@")[0].split(".");
    const name = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ") || "Engineering Specifier";
    const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase() || "H2";

    const newUser: User = {
      id: "usr_" + Math.random().toString(36).substr(2, 9),
      name,
      email: cleanEmail,
      company: cleanEmail.split("@")[1]?.replace(".com", "").replace(".gov", "").toUpperCase() + " Infrastructure",
      role: "Engineering Specifier",
      roleType: "engineer",
      tier: "Verified Client (Direct Spec)",
      avatarInitials: initials,
      savedSubmittals: ["sub-awwa-c515", "sub-astm-a536"],
      recentQuotes: []
    };

    persistUser(newUser);
    setIsLoading(false);
    return { success: true };
  };

  const demoLogin = (role: "engineer" | "contractor" | "distributor") => {
    const demo = DEMO_USERS[role];
    if (demo) {
      persistUser(demo);
    }
  };

  const register = async (data: RegisterData): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (!data.email || !data.email.includes("@")) {
      setIsLoading(false);
      return { success: false, error: "Please provide a valid company email address." };
    }
    if (!data.name || data.name.trim().length < 2) {
      setIsLoading(false);
      return { success: false, error: "Please provide your full legal or engineering name." };
    }
    if (!data.company || data.company.trim().length < 2) {
      setIsLoading(false);
      return { success: false, error: "Please specify your municipality, contractor firm, or agency." };
    }

    const initials = data.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase() || "H2";
    let tier = "Contractor Wholesale (Tier 2)";
    let roleTitle = "Utility Contractor";

    if (data.roleType === "engineer") {
      tier = "Municipal Specifier (Direct CAD Access)";
      roleTitle = "Municipal Project Engineer";
    } else if (data.roleType === "distributor") {
      tier = "Regional Distributor (Tier 1 Stocking)";
      roleTitle = "Waterworks Master Distributor";
    }

    const newUser: User = {
      id: "usr_" + Math.random().toString(36).substr(2, 9),
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      company: data.company.trim(),
      role: roleTitle,
      roleType: data.roleType,
      licenseOrId: data.licenseOrId?.trim() || "Pending Review",
      tier,
      avatarInitials: initials,
      savedSubmittals: ["sub-awwa-c515", "sub-astm-a536", "sub-curb-box-mn"],
      recentQuotes: []
    };

    persistUser(newUser);
    setIsLoading(false);
    return { success: true };
  };

  const logout = () => {
    persistUser(null);
  };

  const saveSubmittal = (submittalId: string) => {
    if (!user) return;
    if (user.savedSubmittals.includes(submittalId)) return;
    const updated = {
      ...user,
      savedSubmittals: [...user.savedSubmittals, submittalId]
    };
    persistUser(updated);
  };

  const removeSubmittal = (submittalId: string) => {
    if (!user) return;
    const updated = {
      ...user,
      savedSubmittals: user.savedSubmittals.filter(id => id !== submittalId)
    };
    persistUser(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        demoLogin,
        logout,
        saveSubmittal,
        removeSubmittal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
