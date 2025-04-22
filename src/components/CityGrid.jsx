import CityCard from './CityCard'

function CityGrid({ cities, currentTime }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cities.map((city) => (
        <CityCard key={city.id} city={city} currentTime={currentTime} />
      ))}
    </div>
  )
}

export default CityGrid