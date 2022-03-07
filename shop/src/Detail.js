import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
    padding : 20px;
`;




function Detail(props){


    let [alert, alert변경] = useState(true);

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
                        <button className="btn btn-danger">주문하기</button>
                        <div>
                        <button style={{margin:"20px"}} className="btn btn-danger" onClick={() => {
                            history.goBack();
                        }}>뒤로가기</button>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Detail;