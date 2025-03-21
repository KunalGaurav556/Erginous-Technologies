import React from 'react'

const Home = () => {
  return (
    <>
        <h2>Cart</h2>
        <div>
            <img width={'100px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-C7szyrWLyw2QCB72bfPYFRFDBwRtr3ruwFGFCoCJxnlMOf-bsFImwfGCBzA0ea6jAh8&usqp=CAU" alt="" />
        </div>

        <div className="mainCart" style={{
            border:'2px solid black',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap:'2rem',
            borderRadius:'15px',
            padding:'1rem',
            boxShadow:'2px 2px 5px 2px black'
        }}>
            <div className="leftCart">
                <img width={'200px'} src="https://www.dxomark.com/wp-content/uploads/medias/post-132367/Apple-iPhone-14_Plus_FINAL_featured-image-packshot-review.jpg" alt="" />
            </div>
            <div className="midCart">
                <span><b>Iphone</b></span> <br />
                <span>$10000.00</span>
            </div>
            <div className="rightCart">
                <button style={{backgroundColor:'red',color:'white'}}>Add to cart</button>
            </div>
        </div>
    </>
  )
}

export default Home