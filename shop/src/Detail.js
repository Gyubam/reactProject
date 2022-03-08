import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { Button, Navbar, Nav, Tab } from 'react-bootstrap'
import {CSSTransition} from 'react-transition-group'


let 박스 = styled.div`
    padding : 20px;
`;




function Detail(props){


    let [alert, alert변경] = useState(true);

    let [누른탭, 누른탭변경] = useState(0);

    let [스위치, 스위치변경] = useState(false);

// 컴포넌트가 mount 되었을때, 컴포넌트가 update될때 특정코드실행
    useEffect(()=>{
        let 타이머 = setTimeout(()=>{
            alert변경(false)
        },2000)
        return () => { clearTimeout(타이머)} // 타이머 해제 스킬
    },[]); // []안에 state 가 변경될때만 실행

    

    // /:id 자리에 사용자가 입력한 값
    let {id} = useParams(); // 사용자가 입력한 파라미터들
    let 찾은상품 = props.shoes.find(x => x.id == id);
    let history = useHistory();
    let style = {
        margin:"10px"
    }

    return(
            <div className="container">
                <h4 className='red' style={{margin:"20px"}}>Detail</h4>

                {
                    alert === true
                    ? (<div className='my-alert2'>
                        <p>재고가 얼마 남지 않았습니다</p>
                        </div>)
                    : null
                }

                <div className="row">
                    <div className="col-md-6">
                        <img src={"https://codingapple1.github.io/shop/shoes"+ props.shoes[id].id + ".jpg"} width="100%"/>
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{찾은상품.title}</h4>
                        <p>{찾은상품.content}</p>
                        <p>{찾은상품.price}원</p>
                        <Info 재고={props.재고}></Info>
                        <button className="btn btn-danger" onClick={()=>{ props.재고변경([9,11,12])}}>주문하기</button>
                        <div>
                        <button style={{margin:"20px"}} className="btn btn-danger" onClick={() => {
                            history.goBack();
                        }}>뒤로가기</button>
                        </div>
                    </div>

                    <Nav className='mt-5' variant="tabs" defaultActiveKey="/link-0">
                        <Nav.Item>
                            <Nav.Link eventKey="link-0" onClick={() =>{스위치변경(false); 누른탭변경(0)}}>Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={() =>{스위치변경(false); 누른탭변경(1)}}>Option 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
    
                </div>

                {/* in = 애니메이션 켜는 스위치 , true면 동작, 클래스네임 임의 , 타임아웃 = 동작시간 */}
                <CSSTransition in={스위치} classNames="wow" timeout={500}>
                <TabContent 누른탭={누른탭} 스위치변경={스위치변경}></TabContent>
                </CSSTransition>
            </div>

    );
}

function TabContent(props) {

    useEffect( () => {
        props.스위치변경(true);
    });

    if (props.누른탭 === 0) {
        return <div>0번째 내용입니다</div>
    }
    else if (props.누른탭 === 1) {
        return <div>1번째 내용입니다</div>
    }
    else if (props.누른탭 === 2) {
        return <div>2번째 내용입니다</div>
    }
    
    
    
}


function Info(props) {
    return(
        <p>재고 : {props.재고[0]} </p>
    );
}

export default Detail;