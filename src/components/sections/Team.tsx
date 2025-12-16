export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Mehmet Yilmaz',
      role: 'Herz des Hauses',
      description: 'Führt den Familienbetrieb in 3. Generation mit Leidenschaft für authentische türkische Küche.',
      experience: '25+ Jahre'
    },
    {
      id: 2,
      name: 'Aylin Schmidt',
      role: 'Feinkost-Spezialistin',
      description: 'Kreiert täglich frische Antipasti und Feinkost-Spezialitäten mit Liebe zum Detail.',
      experience: '12+ Jahre'
    },
    {
      id: 3, 
      name: 'Ahmet Demir',
      role: 'Baklava-Meister',
      description: 'Beherrscht die traditionelle Kunst der Baklava-Herstellung wie kaum ein anderer.',
      experience: '18+ Jahre'
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-3">
        
        {/* Заголовок */}
        <div className="text-center mb-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Leidenschaft</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Unser Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Die leidenschaftlichen Menschen hinter Culinar
          </p>
        </div>

        {/* Карточки команды */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl p-2 text-center border border-gray-200 hover:border-primary transition-all duration-300 hover:-translate-y-1"
            >
              
              {/* Аватар */}
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-white">
                  {member.id === 1 && '👨‍🍳'}
                  {member.id === 2 && '👩‍🍳'} 
                  {member.id === 3 && '🍯'}
                </span>
              </div>

              {/* Информация */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <div className="bg-accent text-gray-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                {member.role}
              </div>
              
              <p className="text-gray-600 mb-2 text-xs leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}