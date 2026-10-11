"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface Header06Tab {
  label: React.ReactNode;
  value: string;
}

export interface Header06Props {
  title: React.ReactNode;
  /** Small icon before the title (e.g. a settings icon). */
  icon?: React.ReactNode;
  onBack?: () => void;
  backLabel?: string;
  tabs: Header06Tab[];
  /** Value of the selected tab. */
  activeTab?: string;
  onTabChange?: (value: string) => void;
}

/**
 * Static section bar: back arrow, icon and title, then a row of tabs on the bar
 * colour (inherit text, secondary indicator) at full toolbar height.
 */
export function Header06({ title, icon, onBack, backLabel = "Back", tabs, activeTab, onTabChange }: Header06Props) {
  const value = tabs.some((t) => t.value === activeTab) ? activeTab : tabs[0]?.value ?? false;
  return (
    <AppBar position="static">
      <Toolbar>
        {onBack && (
          <IconButton edge="start" color="inherit" onClick={onBack} sx={{ mr: 2 }} aria-label={backLabel}>
            <ArrowBackIcon />
          </IconButton>
        )}
        {icon}
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 4, ml: icon ? 1 : 0 }}>
          {title}
        </Typography>
        <Tabs
          value={value}
          onChange={(_e, v: string) => onTabChange?.(v)}
          textColor="inherit"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{ minHeight: "64px", "& .MuiTab-root": { minHeight: "64px" } }}
        >
          {tabs.map((t) => (
            <Tab key={t.value} label={t.label} value={t.value} />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Header06;
