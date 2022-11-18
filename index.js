// book 1
function cartItem(){
    html_data=``
    // alert("Add to cart")
    html_data=`<img src="./book1.jpg" alt="Mike" style="width:300px" height="300px"><h3>Arthur Conan Doyle</h3>&#8377; <span class="rupee">199</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Buy now</button>`
    cart.innerHTML=html_data
}   

// book 2
function cartItem2(){
    html_data=``
    // alert("Add to cart")
    html_data=`<img src="./War-and-Peace.jpg" alt="Jane" style="width:300px" height="300px"><h3>Leo Tolstoy</h3>&#8377; <span class="rupee">299</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Buy now</button>`
    cart.innerHTML=html_data
}

// book 3

function cartItem3(){
    html_data=``
    // alert("Add to cart")
    html_data=`<img src="./jungle book.jpg" alt="Mike" style="width:300px" height="300px"><h3>Rudyard Klipling</h3>&#8377; <span class="rupee">399</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Buy now</button>`
    cart.innerHTML=html_data
}

// book 4

function cartItem4(){
    html_data=``
    // alert("Add to cart")
    html_data=`<img src="./nalukettu.webp" alt="Dan" style="width:300px" height="300px"><h3>M T Vasudevan Nair</h3>&#8377; <span class="rupee">299</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Buy now</button>`
    cart.innerHTML=html_data
}

// book 5

function cartItem5(){
    html_data=``
    // alert("Add to cart")
    html_data=`<img src="./makbath.jpg" alt="John" style="width:300px" height="300px"><h3>William Shekspir</h3>&#8377; <span class="rupee">699</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Buy now</button>`
    cart.innerHTML=html_data
}

// book 6

function cartItem6(){
    html_data=``
    // alert("Add to cart")
    html_data=`<img src="./midnight.jpg" alt="Jane" style="width:300px" height="300px"><h3>Matt Haig</h3>&#8377; <span class="rupee">599</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Buy now</button>`
    cart.innerHTML=html_data
}

// book 7

function cartItem7(){
    html_data=``
    // alert("Add to cart")
    html_data=`<img src="./oliver.jpg" alt="Mike" style="width:300px" height="300px"><h3>Charles Dickens</h3>&#8377; <span class="rupee">399</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Buy now</button>`
    cart.innerHTML=html_data
}

// book 8

function cartItem8(){
    html_data=``
    // alert("Add to cart,")
    html_data=`<img src="./prema leghana.jpg" alt="Dan" style="width:300px" height="300px"><h3>Vaikom Muhammad Basheer</h3>&#8377; <span class="rupee">190</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Buy now</button>`
    cart.innerHTML=html_data
}

// function removeItem(){
//     html_data=`  <div id="cart" class="col-5"><h4 style="margin-top: 140px;"><span style="font-family: 'Karla', sans-serif;">Cart is empty &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-face-sad-tear fa-2x"></i></span><br>Waiting for your choice....</h4></div>`
//     remove.innerHTML=html_data
// }

function submitBook(){
    username=bname.value
    author=author.value
    btype=type.value
    bprize=prize.value
    localStorage.setItem("username",username)
    localStorage.setItem("author",author)
    localStorage.setItem("btype",btype)
    localStorage.setItem("bprize",bprize)
    window.location="dash.html"

}