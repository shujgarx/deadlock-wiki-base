
import React, { useState, useEffect } from 'react';
import { Category, DeadlockEntity, ItemType, Theme } from './types';
import { fetchDeadlockData } from './services/geminiService';
import { NavBar } from './components/NavBar';
import { EntityCard } from './components/EntityCard';
import { Loader2, AlertTriangle } from 'lucide-react';

// Custom Icons for Item Categories
const WeaponIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M10.5 2L3 21.5L5.5 22L12 14L18.5 22L21 21.5L13.5 2L12 2L10.5 2ZM12 4.5L17.5 19L12 12.5L6.5 19L12 4.5Z" />
  </svg>
);

const VitalityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const SpiritIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
    <circle cx="12" cy="17" r="1" />
  </svg>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>(Category.HEROES);
  const [theme, setTheme] = useState<Theme>('dark');
  const [itemFilter, setItemFilter] = useState<ItemType>('Weapon'); 

  const [data, setData] = useState<Record<Category, DeadlockEntity[]>>({
    [Category.HEROES]: [],
    [Category.ITEMS]: [],
    [Category.TERMS]: [],
    [Category.BUILDS]: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (data[activeTab]?.length > 0) return;

      setLoading(true);
      setError(null);
      
      try {
        const result = await fetchDeadlockData(activeTab);
        setData(prev => ({
          ...prev,
          [activeTab]: result
        }));
      } catch (err) {
        setError('Не удалось загрузить данные. Пожалуйста, попробуйте позже.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [activeTab]);

  const getThemeClasses = () => {
    switch (theme) {
        case 'light': return 'bg-slate-100 text-slate-900 selection:bg-amber-500/30';
        case 'glass': return 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white selection:bg-pink-500/30';
        case 'dark':
        default: return 'bg-[#0f172a] text-[#e2e8f0] selection:bg-amber-500/30';
    }
  };

  const getItemFilterButton = (type: ItemType, Icon: React.FC) => {
      const isActive = itemFilter === type;
      
      let activeClass = '';
      let borderClass = '';
      let textClass = '';
      let hoverClass = '';

      if (type === 'Weapon') {
          activeClass = 'bg-[#e58e36] text-white border-[#e58e36] shadow-[0_0_15px_rgba(229,142,54,0.5)]';
          borderClass = 'border-[#e58e36]';
          textClass = 'text-[#e58e36]';
          hoverClass = 'hover:bg-[#e58e36] hover:text-white';
      } else if (type === 'Vitality') {
          activeClass = 'bg-[#75b11a] text-white border-[#75b11a] shadow-[0_0_15px_rgba(117,177,26,0.5)]';
          borderClass = 'border-[#75b11a]';
          textClass = 'text-[#75b11a]';
          hoverClass = 'hover:bg-[#75b11a] hover:text-white';
      } else { // Spirit
          activeClass = 'bg-[#8d51bd] text-white border-[#8d51bd] shadow-[0_0_15px_rgba(141,81,189,0.5)]';
          borderClass = 'border-[#8d51bd]';
          textClass = 'text-[#8d51bd]';
          hoverClass = 'hover:bg-[#8d51bd] hover:text-white';
      }

      return (
          <button
              onClick={() => setItemFilter(type)}
              className={`
                  flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 border
                  ${isActive ? `${activeClass} scale-105` : `bg-transparent ${textClass} ${borderClass} ${hoverClass} opacity-80 hover:opacity-100`}
              `}
          >
              <Icon />
              <span>{type === 'Weapon' ? 'Оружие' : type === 'Vitality' ? 'Выживаемость' : 'Спиритизм'}</span>
          </button>
      );
  };

  // Filter data based on sub-category for Items with fallback for missing types
  const displayData = activeTab === Category.ITEMS
    ? data[activeTab].filter(item => {
        // Check direct itemType match
        if (item.itemType === itemFilter) return true;
        // Fallback: check if tags array contains the type string
        if (item.tags && item.tags.includes(itemFilter)) return true;
        return false;
    })
    : data[activeTab];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${getThemeClasses()}`}>
      <NavBar activeTab={activeTab} onTabChange={setActiveTab} currentTheme={theme} onThemeChange={setTheme} />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        <div className="mb-10 text-center">
            <h1 className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${theme === 'glass' ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700'}`}>
                {activeTab === Category.HEROES && "Герои Deadlock"}
                {activeTab === Category.ITEMS && "Предметы"}
                {activeTab === Category.BUILDS && "Сборки предметов"}
                {activeTab === Category.TERMS && "Игровая Механика"}
            </h1>
            <p className={`max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                {activeTab === Category.HEROES && "Исследуйте уникальные способности и роли персонажей."}
                {activeTab === Category.ITEMS && "Полное описание игровых предметов. Выберите категорию:"}
                {activeTab === Category.BUILDS && "Актуальные сборки и стратегии прокачки."}
                {activeTab === Category.TERMS && "Секреты карты, лайнинга и стратегических объектов."}
            </p>

            {activeTab === Category.ITEMS && (
                <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up">
                    {getItemFilterButton('Weapon', WeaponIcon)}
                    {getItemFilterButton('Vitality', VitalityIcon)}
                    {getItemFilterButton('Spirit', SpiritIcon)}
                </div>
            )}
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 text-center max-w-lg mx-auto">
            <AlertTriangle className="w-10 h-10 text-red-500 mx-auto mb-2" />
            <p className="text-red-200">{error}</p>
            <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm transition-colors"
            >
                Повторить
            </button>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-amber-500 animate-spin mb-4" />
            <p className="text-slate-400 animate-pulse">
                Загрузка данных deadlock.one...
            </p>
          </div>
        )}

        {!loading && !error && (
          <>
            {displayData && displayData.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayData.map((entity, index) => (
                  <EntityCard 
                    key={`${activeTab}-${index}-${entity.name}`} 
                    entity={entity} 
                    category={activeTab} 
                    index={index}
                    theme={theme}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-500 text-lg">Элементы не найдены в этой категории.</p>
              </div>
            )}
          </>
        )}
      </main>

      <footer className={`border-t py-8 mt-12 ${theme === 'light' ? 'bg-slate-200 border-slate-300 text-slate-600' : 'bg-[#1e293b]/50 border-white/5 text-slate-500'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">
                Deadlock Wiki. Информация основана на открытых источниках.
                <br/>
                Deadlock является зарегистрированной торговой маркой Valve Corporation.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
