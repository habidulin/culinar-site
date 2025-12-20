import Image from 'next/image'
export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Salahuldin Hashimi',
      role: 'Herz des Hauses',
      description: 'Führt den Familienbetrieb in 3. Generation mit Leidenschaft für authentische türkische Küche.',
      experience: '25+ Jahre',
      photo: '/team1.jpg'
    },
    {
      id: 2,
      name: 'Sayed Arif Hashimi',
      role: 'Feinkost-Spezialistin Mitarbeiter',
      description: 'Kreiert täglich frische Antipasti und Feinkost-Spezialitäten mit Liebe zum Detail.',
      experience: '12+ Jahre',
      photo: '/team2.jpg'
    },
    {
      id: 3, 
      name: 'Ahmet Demir',
      role: 'Baklava-Meister',
      description: 'Beherrscht die traditionelle Kunst der Baklava-Herstellung wie kaum ein anderer.',
      experience: '18+ Jahre',
      photo: '/team3.jpg'
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-3">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Unser Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Die leidenschaftlichen Menschen hinter Culinar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl p-2 text-center border border-gray-200 hover:border-primary transition-all duration-300 hover:-translate-y-1"
            >
              {/* Фото */}

              <div className="relative w-36 h-36 mx-auto rounded-xl border-1 border-accent overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain rounded-xl"
                />
              </div>
              {/* Информация */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <div className="bg-accent text-gray-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                {member.role}
              </div>
              
              <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}