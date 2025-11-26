import React from 'react';
import { Category, Theme } from '../types';
import { Users, Sword, BookOpen, Hammer, Sun, Moon, Droplets } from 'lucide-react';

interface NavBarProps {
  activeTab: Category;
  onTabChange: (tab: Category) => void;
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activeTab, onTabChange, currentTheme, onThemeChange }) => {
  const tabs = [
    { id: Category.HEROES, label: 'Персонажи', icon: Users },
    { id: Category.ITEMS, label: 'Предметы', icon: Sword },
    { id: Category.BUILDS, label: 'Билды', icon: Hammer },
    { id: Category.TERMS, label: 'Термины', icon: BookOpen },
  ];

  const themes: { id: Theme; icon: any }[] = [
      { id: 'dark', icon: Moon },
      { id: 'light', icon: Sun },
      { id: 'glass', icon: Droplets },
  ];

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-sm border-b transition-colors duration-500 ${currentTheme === 'light' ? 'bg-white/90 border-slate-200' : 'bg-[#0f172a]/90 border-white/10'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-serif font-bold text-black shadow-[0_0_10px_#f59e0b]">
              D
            </div>
            <span className={`text-xl font-serif font-bold tracking-wider ${currentTheme === 'light' ? 'text-slate-800' : 'text-amber-500'}`}>
              DEADLOCK <span className={`${currentTheme === 'light' ? 'text-slate-500' : 'text-slate-400'} font-sans text-sm font-normal`}>WIKI</span>
            </span>
          </div>
          
          {/* Center Tabs */}
          <div className="flex space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar mx-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`
                    relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-md transition-all duration-200 whitespace-nowrap
                    ${isActive 
                      ? 'text-black bg-amber-500 font-medium shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-105' 
                      : currentTheme === 'light' 
                        ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-200' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'}
                  `}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theme Switcher */}
          <div className={`flex p-1 rounded-full border ${currentTheme === 'light' ? 'bg-slate-100 border-slate-300' : 'bg-black/30 border-white/10'}`}>
            {themes.map((t) => {
                const Icon = t.icon;
                const isSelected = currentTheme === t.id;
                return (
                    <button
                        key={t.id}
                        onClick={() => onThemeChange(t.id)}
                        className={`p-1.5 rounded-full transition-all duration-300 ${isSelected ? 'bg-amber-500 text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        title={t.id}
                    >
                        <Icon size={14} />
                    </button>
                )
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
