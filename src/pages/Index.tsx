import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Space {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  area: string;
  capacity: string;
}

const spaces: Space[] = [
  {
    id: 'central-hall',
    title: 'Центральный холл',
    description: 'Панорамный вид 360°, мраморный пол, стены из красного дерева, хрустальная люстра',
    icon: 'Home',
    features: ['Мраморный пол', 'Хрустальная люстра', 'Динамическое освещение', 'Панорама 360°'],
    area: '450 м²',
    capacity: '100 человек'
  },
  {
    id: 'executive-office',
    title: 'Кабинет управляющего',
    description: 'Массивный стол из цельного дерева, интерактивные книги, камин, кожаные кресла Chesterfield',
    icon: 'Briefcase',
    features: ['Стол из массива', 'Камин', 'Кресла Chesterfield', 'Библиотека'],
    area: '120 м²',
    capacity: '8 человек'
  },
  {
    id: 'conference-room',
    title: 'Конференц-зал',
    description: 'Овальный стол на 20 персон, стеклянная стена с видом на ночной город',
    icon: 'Users',
    features: ['Овальный стол', 'Вид на город', 'Интерактивная доска', 'Система видео'],
    area: '200 м²',
    capacity: '20 человек'
  },
  {
    id: 'library',
    title: 'Библиотека',
    description: 'Двухъярусное пространство с винтовой лестницей, тысячи интерактивных книг',
    icon: 'BookOpen',
    features: ['Винтовая лестница', '5000+ книг', 'Читальные зоны', 'Два яруса'],
    area: '180 м²',
    capacity: '15 человек'
  }
];

const Index = () => {
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState('central-hall');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D4AF37]">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-[#D4AF37] text-[#1A1A1A] hover:bg-[#D4AF37]/90 px-6 py-2 text-sm font-normal">
            Premium Virtual Experience
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight animate-fade-in" style={{ fontFamily: "'Playfair Display', serif" }}>
            PREMIUM VIRTUAL OFFICE
          </h1>
          
          <p className="text-xl md:text-2xl text-[#F5F5DC] mb-12 max-w-3xl mx-auto animate-fade-in" style={{ fontFamily: "'Lato', sans-serif" }}>
            Роскошное пространство премиум-класса из красного дерева. 
            Почувствуйте атмосферу эксклюзивности стоимостью $50M+
          </p>
          
          <Button 
            size="lg" 
            className="bg-[#D4AF37] text-[#1A1A1A] hover:bg-[#D4AF37]/90 px-8 py-6 text-lg animate-scale-in font-semibold"
            onClick={() => document.getElementById('navigation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="ArrowDown" className="mr-2" size={20} />
            Начать экскурсию
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
      </div>

      <div id="navigation" className="sticky top-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 overflow-x-auto">
            <div className="flex gap-1">
              {spaces.map((space) => (
                <Button
                  key={space.id}
                  variant={activeNav === space.id ? 'default' : 'ghost'}
                  className={`whitespace-nowrap ${
                    activeNav === space.id 
                      ? 'bg-[#8B4513] text-white hover:bg-[#8B4513]/90' 
                      : 'text-[#F5F5DC] hover:text-white hover:bg-[#8B4513]/20'
                  }`}
                  onClick={() => {
                    setActiveNav(space.id);
                    document.getElementById(space.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Icon name={space.icon as any} className="mr-2" size={18} />
                  {space.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {spaces.map((space, index) => (
              <div
                id={space.id}
                key={space.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card 
                  className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border-[#8B4513]/30 hover:border-[#D4AF37]/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer group overflow-hidden"
                  onClick={() => setSelectedSpace(selectedSpace === space.id ? null : space.id)}
                >
                  <div className="h-48 bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D4AF37] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon 
                        name={space.icon as any} 
                        size={80} 
                        className="text-white/20 group-hover:text-white/30 transition-all duration-300 group-hover:scale-110" 
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                          <Icon name={space.icon as any} size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{space.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-[#F5F5DC] mb-6 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                      {space.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-[#8B4513]/10 rounded-lg p-3 border border-[#8B4513]/20">
                        <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                          <Icon name="Maximize" size={16} />
                          <span className="text-xs uppercase tracking-wide">Площадь</span>
                        </div>
                        <p className="text-white font-semibold">{space.area}</p>
                      </div>
                      <div className="bg-[#8B4513]/10 rounded-lg p-3 border border-[#8B4513]/20">
                        <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                          <Icon name="Users" size={16} />
                          <span className="text-xs uppercase tracking-wide">Вместимость</span>
                        </div>
                        <p className="text-white font-semibold">{space.capacity}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#D4AF37]">
                        <Icon name="Sparkles" size={18} />
                        <span className="text-sm font-semibold uppercase tracking-wide">Особенности</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {space.features.map((feature, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-2 text-sm text-[#F5F5DC] bg-[#8B4513]/5 rounded-md p-2 border border-[#8B4513]/10"
                          >
                            <Icon name="Check" size={14} className="text-[#D4AF37]" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full mt-6 bg-[#8B4513] hover:bg-[#8B4513]/90 text-white border border-[#D4AF37]/30"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSpace(space.id);
                      }}
                    >
                      <Icon name="Eye" className="mr-2" size={18} />
                      Исследовать пространство
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Технические возможности</h2>
            <p className="text-xl text-[#F5F5DC] max-w-2xl mx-auto" style={{ fontFamily: "'Lato', sans-serif" }}>
              Передовые технологии для создания непревзойденного опыта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Zap', title: '90+ FPS', desc: 'Плавная производительность' },
              { icon: 'Maximize2', title: '8K Текстуры', desc: 'Фотореалистичная графика' },
              { icon: 'Navigation', title: 'Свобода движения', desc: 'Полная навигация' },
              { icon: 'Volume2', title: 'Spatial Audio', desc: 'Пространственный звук' },
              { icon: 'Clock', title: '< 3 сек', desc: 'Время загрузки' },
              { icon: 'Glasses', title: 'VR Ready', desc: 'Поддержка VR/AR' }
            ].map((feature, idx) => (
              <Card 
                key={idx}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-[#D4AF37]/20 rounded-full mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
                  <p className="text-[#F5F5DC]" style={{ fontFamily: "'Lato', sans-serif" }}>{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] py-12 border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#F5F5DC] text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
            © 2025 Premium Virtual Office. Эксклюзивный опыт премиум-класса
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;