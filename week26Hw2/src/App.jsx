import React from "react"
import BookCard from "./components/BookCard"




function App() {

  return (
    <div className="divAll">
      <h1>My profile cards</h1>
      <div className="divCard">
           <BookCard 
        image = "https://antiq.kz/wp-content/uploads/2022/06/DSC01655.jpg"
        title = 'Абай жолы'
        autor = 'Мұқтар Әуезов'
        age = '1942'
        />
        <BookCard 
        image = "https://img.labirint.ru/images/goodssets/preview_img_small_1278_474.jpg"
        title = ' Весь Шерлок Холмс'
        autor = 'Конан Дойл'
        age = '2019'
        />
        <BookCard 
        image = "https://edu-nv.ru/files/791/01.10.2020/pasted_image_1.png"
        title = 'Война и мир'
        autor = 'Лев Толстой'
        age = '1865-1869'
        />
      </div>
     
    </div>
  )
}

export default App
