import React, { useState, useEffect } from 'react';
import { DeadlockEntity, Category, Theme } from '../types';
import { Zap, User, Package } from 'lucide-react';

interface EntityCardProps {
  entity: DeadlockEntity;
  category: Category;
  index: number;
  theme: Theme;
}

export const EntityCard: React.FC<EntityCardProps> = ({ entity, category, index, theme }) => {
  const [imgSrc, setImgSrc] = useState<string>(entity.image || '');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(entity.image || '');
    setHasError(false);
  }, [entity.image]);

  const handleError = () => {
    if (!hasError) {
        setHasError(true);
        // Fallback to a generated placeholder with the entity name
        setImgSrc(`https://placehold.co/400x300/1e293b/ffffff?text=${encodeURIComponent(entity.name)}`);
    }
  };

  const getStat1Label = () => {
    switch(category) {
        case Category.ITEMS: return '';
        case Category.HEROES: return 'Сложность';
        case Category.BUILDS: return 'Герой';
        default: return '';
    }
  };

  const getStat1Icon = () => {
    switch(category) {
        case Category.ITEMS: return null;
        case Category.HEROES: return <Zap size={16} className="text-amber-400" />;
        case Category.BUILDS: return <User size={16} className="text-amber-400" />;
        default: return null;
    }
  };

  const getStat2Label = () => {
    switch(category) {
        case Category.BUILDS: return 'Основные предметы';
        case Category.ITEMS: return '';
        default: return '';
    }
  };

  // Styles based on Item Type and Theme
  const getItemStyles = () => {
    const isItem = category === Category.ITEMS;
    
    // Base Card Classes
    let cardBase = "group relative flex flex-col h-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1";
    
    if (theme === 'light') {
        cardBase += " bg-white shadow-md hover:shadow-xl border border-slate-200";
    } else if (theme === 'glass') {
        cardBase += " bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]";
    } else {
        // Dark theme (Default)
        cardBase += " bg-[#242935] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] border";
    }

    // Border Colors for Items
    let borderColor = theme === 'light' ? 'border-slate-200' : 'border-white/5';
    let titleColor = theme === 'light' ? 'text-slate-800' : 'text-white';

    if (isItem) {
        switch(entity.itemType) {
            case 'Weapon':
                borderColor = 'border-t-[4px] border-t-[#e58e36]';
                titleColor = 'text-[#e58e36]';
                break;
            case 'Vitality':
                borderColor = 'border-t-[4px] border-t-[#75b11a]';
                titleColor = 'text-[#75b11a]';
                break;
            case 'Spirit':
                borderColor = 'border-t-[4px] border-t-[#8d51bd]';
                titleColor = 'text-[#8d51bd]';
                break;
        }
        // Remove side/bottom borders for items in Dark theme to match the reference, keep top border color
        if (theme === 'dark') {
            cardBase += ` ${borderColor} border-x-0 border-b-0`;
        } else {
             cardBase += ` ${borderColor}`;
        }
    } else {
        // Non-item cards
        if (theme === 'dark') cardBase += ' border-white/5';
    }

    return { cardBase, titleColor };
  };

  const styles = getItemStyles();

  return (
    <div className={`${styles.cardBase} animate-fade-in`} style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}>
      
      {/* Image Section */}
      <div className={`relative overflow-hidden ${category === Category.ITEMS ? 'h-40 bg-[#1e293b]' : 'h-48 bg-[#1e293b]'}`}>
        {/* Gradient overlay for text readability on non-items */}
        {category !== Category.ITEMS && <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />}
        
        <img 
          src={imgSrc} 
          alt={entity.name}
          onError={handleError}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${category === Category.ITEMS ? 'p-4 object-contain' : 'object-cover opacity-90'}`}
        />
        
        {/* Hero/Term Title Overlay */}
        {category !== Category.ITEMS && (
            <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-xl font-serif font-bold text-white tracking-wide drop-shadow-md group-hover:text-amber-400 transition-colors">
                {entity.name}
            </h3>
            </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow relative">
        {/* Item Title (Shown below image) */}
        {category === Category.ITEMS && (
            <h3 className={`text-lg font-bold mb-2 leading-tight transition-colors ${styles.titleColor} group-hover:brightness-125`}>
                {entity.name}
            </h3>
        )}

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-4 flex-grow ${theme === 'light' ? 'text-slate-600' : 'text-[#94a3b8]'}`}>
          {entity.description}
        </p>

        {/* Stats / Info Footer */}
        <div className="mt-auto">
            {/* Cost for Items */}
            {category === Category.ITEMS && entity.stat1 && (
                <div className="flex items-center gap-2 mt-1">
                     <div className="w-3 h-5 bg-[url('https://deadlock.one/sites/default/files/misc/souls.png')] bg-contain bg-no-repeat opacity-90"></div>
                    <span className={`text-lg font-bold ${theme === 'light' ? 'text-slate-800' : 'text-[#e2e8f0]'}`}>{entity.stat1}</span>
                </div>
            )}

            {/* Other categories stats */}
            {category !== Category.ITEMS && (
                <div className={`border-t pt-3 grid grid-cols-1 gap-2 ${theme === 'light' ? 'border-slate-200' : 'border-white/5'}`}>
                     {entity.stat1 && (
                        <div className={`flex items-center gap-2 text-xs ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>
                            {getStat1Icon()}
                            <span>{getStat1Label() && `${getStat1Label()}:`} <span className={`${theme === 'light' ? 'text-slate-800' : 'text-white'} font-medium`}>{entity.stat1}</span></span>
                        </div>
                    )}
                    {entity.stat2 && (
                        <div className={`flex items-start gap-2 text-xs ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>
                            {category === Category.BUILDS ? <Package size={14} className="text-blue-400 mt-0.5" /> : null}
                            <div className="flex flex-col">
                                {getStat2Label() && <span className="text-[10px] uppercase opacity-70">{getStat2Label()}</span>}
                                <span className={`${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>{entity.stat2}</span>
                            </div>
                        </div>
                    )}
                     {entity.tags && (
                        <div className="flex flex-wrap gap-1 mt-2">
                        {entity.tags.map((tag, i) => (
                            <span key={i} className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border uppercase ${
                                theme === 'light' 
                                ? 'bg-slate-100 text-slate-600 border-slate-200' 
                                : 'bg-white/5 text-slate-400 border-white/5'
                            }`}>
                            {tag}
                            </span>
                        ))}
                        </div>
                    )}
                </div>
            )}
            
            {entity.tips && category !== Category.ITEMS && (
                 <div className={`mt-3 p-2 rounded border ${theme === 'light' ? 'bg-amber-50 border-amber-200' : 'bg-black/20 border-white/5'}`}>
                    <p className={`text-xs italic ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                      <span className="font-bold not-italic text-amber-500">Совет:</span> {entity.tips}
                    </p>
                 </div>
            )}
        </div>
      </div>
    </div>
  );
};