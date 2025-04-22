import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

function CityCard({ city, currentTime }) {
  const { name, englishName, timezone, flagCode } = city
  
  // 格式化当前时间为目标时区的时间
  const cityTime = formatInTimeZone(currentTime, timezone, 'HH:mm:ss')
  const cityDate = formatInTimeZone(currentTime, timezone, 'yyyy-MM-dd')
  const weekday = formatInTimeZone(currentTime, timezone, 'EEEE')
  
  return (
    <div className="city-card">
      <div className="city-card-header">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{flagCode}</span>
          <div>
            <h2 className="text-lg font-bold text-white">{name}</h2>
            <p className="text-xs text-gray-300">{englishName}</p>
          </div>
        </div>
      </div>
      <div className="city-card-body">
        <div className="city-time">{cityTime}</div>
        <div className="city-date">{cityDate}</div>
        <div className="city-date">{weekday}</div>
        <div className="city-timezone">{timezone}</div>
      </div>
    </div>
  )
}

export default CityCard