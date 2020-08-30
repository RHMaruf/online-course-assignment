import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = 0;
    let discount = (totalPrice*5)/100;
    
    const paddingStyle= {padding : '10px'};
    return (
        <div style={paddingStyle}>
            <h3>Your have Taken {cart.length} Courses</h3>
            <hr/>
            <ol>
            {
                cart.map(course => {
                totalPrice += course.price;
                discount = (totalPrice*5)/100;
                return <li>{course.course_name}  ${course.price}</li> 
                })
            }
            </ol>
           
          
          <hr/>
            <h5>Total Course Price = {totalPrice}</h5>
            <h5>Discount (5%)= {discount} </h5>
        <h5>Total Payable Price = {totalPrice - discount}</h5>

        </div>
    );
};

export default Cart;