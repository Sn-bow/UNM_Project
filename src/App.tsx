import Slick from './unit/common/slick/Slick'

function App() {
  const list = ["abc", "dve"]
  return (
    <div style={{ height: "100vh" }}>
      <div>
        <h3 style={{ fontSize: "80px" }}>추천 목표</h3>
        <div>
          <Slick imageList={list} />
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: "80px" }}>추천 목표</h3>
        <div>
          <Slick imageList={list} />
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: "80px" }}>추천 목표</h3>
        <div>
          <Slick imageList={list} />
        </div>
      </div>
    </div>
  )
}

export default App
