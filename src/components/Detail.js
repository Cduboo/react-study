import { useEffect, React, useState } from 'react';

import { useParams } from 'react-router-dom';

function Detail(props) {
  // Route path="/detail/:id" 
  // id라는 이름으로 보낸 파라미터를 바로 꺼내서 사용할 수 있다. {id : '0'}
  let {id} = useParams();
  let item = props.item.find( e => e.id == id);
  
  // Component Lifecycle (mount, update, unmount) 시 실행될 코드
  // class oldV extends React.Component {
  //   componentDidMount() {
  //     // 컴포넌트 로드 시 실행되는 코드
  //   }
  //   componentDidUpdate() {
  //     // 컴포넌트 업데이트 시 실행되는 코드
  //   }
  //   componentWillUnmount() {
  //     // 컴포넌트 삭제 전 실행 되는 코드
  //   }
  // }

  // 컴포넌트 로드 업데이트 시 실행되는 코드, html 랜더링 후 실행되는 장점
  // useEffect(()=>{실행코드}, [state]) []안에 state가 변할 때만 실행 시킬 수 있다. 넣지 않으면 1회
  let [alertBox, setAlertBox] = useState(5);
  useEffect(() => { 
    let x = setTimeout(() => {
      if(alertBox > 0) {
        setAlertBox(alertBox-1)
      }
    }, 1000)
  },[alertBox])

  return (
    <div className="container">
      {/* 조건부 렌더링, 조건이 맞을 경우 && 뒤 컴포넌트를 반환한다. */}
      {alertBox > 0 && <div className="alert alert-warning">{alertBox}초 이내 클릭 시 할인</div>}
      
      <div className="row">
        <div className="col-md-6">
          <img src={`http://localhost:3000/item${id}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default Detail;