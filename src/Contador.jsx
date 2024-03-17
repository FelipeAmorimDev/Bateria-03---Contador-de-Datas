export function Contador({ type, value }) {
  const ultimoChar = type.charAt(type.length - 1)

  const handleClickMinusInterval = () =>
    console.log(`Clicou no menos ${ultimoChar === 'o' ? 'do' : 'da'} ${type}`)

  const handleClickPlusInterval = () =>
    console.log(`Clicou no mais ${ultimoChar === 'o' ? 'do' : 'da'} ${type}`)

  return (
    <div className="count">
      <button onClick={handleClickMinusInterval}>-</button>
      <h2>
        {type}: {value}
      </h2>
      <button onClick={handleClickPlusInterval}>+</button>
    </div>
  )
}