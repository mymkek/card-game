import React from 'react';

const HomeContainer:React.FC = () => {
    return (
       <div>
          Главная страница


          <div>
             <div>
                <input type="text" placeholder={'никнейм'}/>
             </div>

               <br/><br/>
             <div>
                создать игру (генерится идентификатор, который можно отправить кому-то)
                <button>Создать</button>
             </div>
             <div>
                подключиться (по идентификатору)
                <input type="text" placeholder={'идентификатор'}/>
                <button>подключиться</button>
             </div>


          </div>
       </div>
    );
};

export default HomeContainer;