import { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock'

const rootId = document.getElementById('root')!

const rootDom = ReactDOM.createRoot(rootId)

// rootDom.render(
//     <div>
//       <div>
//         {restaurants[0].name}

//         <h3>Меню</h3>
        
//         <ul>
//           <li>{restaurants[0].menu[0].name}</li>
//           <li>{restaurants[0].menu[1].name}</li>
//           <li>{restaurants[0].menu[2].name}</li>
//         </ul>
        
//         <h3>Отзывы</h3>
        
//         <ul>
//           <li>{restaurants[0].reviews[0].text}</li>
//           <li>{restaurants[0].reviews[1].text}</li>
//         </ul>
//       </div>

//       <div>
//         {restaurants[1].name}
        
//         <h3>Меню</h3>
        
//         <ul>
//           <li>{restaurants[1].menu[0].name}</li>
//           <li>{restaurants[1].menu[1].name}</li>
//         </ul>
        
//         <h3>Отзывы</h3>
        
//         <ul>
//           <li>{restaurants[1].reviews[0].text}</li>
//           <li>{restaurants[1].reviews[1].text}</li>
//           <li>{restaurants[1].reviews[2].text}</li>
//         </ul>
//       </div>

//       <div>
//         {restaurants[2].name}
        
//         <h3>Меню</h3>
        
//         <ul>
//           <li>{restaurants[2].menu[0].name}</li>
//           <li>{restaurants[2].menu[1].name}</li>
//           <li>{restaurants[2].menu[2].name}</li>
//         </ul>
        
//         <h3>Отзывы</h3>
        
//         <ul>
//           <li>{restaurants[2].reviews[0].text}</li>
//         </ul>
//       </div>

//       <div>
//         {restaurants[3].name}
        
//         <h3>Меню</h3>
        
//         <ul>
//           <li>{restaurants[3].menu[0].name}</li>
//           <li>{restaurants[3].menu[1].name}</li>
//         </ul>
        
//         <h3>Отзывы</h3>
        
//         <ul>
//           <li>{restaurants[3].reviews[0].text}</li>
//           <li>{restaurants[3].reviews[1].text}</li>
//         </ul>
//       </div>
//     </div>
//   )

rootDom.render(
  createElement('div', null,
    createElement('div', null,
      restaurants[0].name,

      createElement('h3', null, 'Меню'),

      createElement('ul', null,
        createElement('li', null, restaurants[0].menu[0].name),
        createElement('li', null, restaurants[0].menu[1].name),
        createElement('li', null, restaurants[0].menu[2].name),
      ),

      createElement('h3', null, 'Отзывы'),

      createElement('ul', null,
        createElement('li', null, restaurants[0].reviews[0].text),
        createElement('li', null, restaurants[0].reviews[1].text),
      )
    ),

    createElement('div', null,
      restaurants[1].name,

      createElement('h3', null, 'Меню'),

      createElement('ul', null,
        createElement('li', null, restaurants[1].menu[0].name),
        createElement('li', null, restaurants[1].menu[1].name),
      ),

      createElement('h3', null, 'Отзывы'),

      createElement('ul', null,
        createElement('li', null, restaurants[1].reviews[0].text),
        createElement('li', null, restaurants[1].reviews[1].text),
        createElement('li', null, restaurants[1].reviews[2].text),
      )
    ),

    createElement('div', null,
      restaurants[2].name,

      createElement('h3', null, 'Меню'),

      createElement('ul', null,
        createElement('li', null, restaurants[2].menu[0].name),
        createElement('li', null, restaurants[2].menu[1].name),
        createElement('li', null, restaurants[2].menu[2].name),
      ),

      createElement('h3', null, 'Отзывы'),

      createElement('ul', null,
        createElement('li', null, restaurants[2].reviews[0].text),
      )
    ),

    createElement('div', null,
      restaurants[3].name,

      createElement('h3', null, 'Меню'),

      createElement('ul', null,
        createElement('li', null, restaurants[3].menu[0].name),
        createElement('li', null, restaurants[3].menu[1].name),
      ),

      createElement('h3', null, 'Отзывы'),

      createElement('ul', null,
        createElement('li', null, restaurants[3].reviews[0].text),
        createElement('li', null, restaurants[3].reviews[1].text),
      )
    ),
  )
)
