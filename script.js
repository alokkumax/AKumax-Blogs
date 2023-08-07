function comingSoon(){
    // $(".content").html("Coming Soon")
    alert("Coming Soon")

}
/// BTN 1
    document.querySelector("#btn1").addEventListener("click", function(){
    //show 1
    document.querySelector(".contentB").style.display = "block"
    
    //active 1 
    this.classList.replace("button","active");
    
    //remove 2 n 3 n 4
    document.querySelector("#btn2").classList.replace("active","button");
    document.querySelector("#btn3").classList.replace("active","button");
    document.querySelector("#btn4").classList.replace("active","button");
    
    // hide 2 n 3 n 4
    document.querySelector(".contentV").style.display = "none"
    document.querySelector(".contentR").style.display = "none"
    document.querySelector(".contentC").style.display = "none"
    })
    
//BTN 2
    document.querySelector("#btn2").addEventListener("click", function(){
    //show 2
    document.querySelector(".contentV").style.display = "block"
    //active 2 
    this.classList.replace("button","active");
    
    //remove 1 n 3 n 4
    document.querySelector("#btn1").classList.replace("active","button");
    document.querySelector("#btn3").classList.replace("active","button");
    document.querySelector("#btn4").classList.replace("active","button");
    
    // hide 1 n 3 n 4
    document.querySelector(".contentB").style.display = "none" 
    document.querySelector(".contentR").style.display = "none"
    document.querySelector(".contentC").style.display = "none"
    
    })
    
/// BTN 3
    document.querySelector("#btn3").addEventListener("click", function(){
    //show 3
    document.querySelector(".contentR").style.display = "flex"
    
    //active 3 
    this.classList.replace("button","active");
    
    //remove 1 n 2 n 4
    document.querySelector("#btn1").classList.replace("active","button");
    document.querySelector("#btn2").classList.replace("active","button");
    document.querySelector("#btn4").classList.replace("active","button");
    
    //hide 1 n 2 n 4
    document.querySelector(".contentB").style.display = "none"
    document.querySelector(".contentV").style.display = "none"
    document.querySelector(".contentC").style.display = "none"
    
    })
/// BTN 4
    document.querySelector("#btn4").addEventListener("click", function(){
        //show 3
        document.querySelector(".contentC").style.display = "flex"
        
        //active 3 
        this.classList.replace("button","active");
        
        //remove 1 n 2 n 3
        document.querySelector("#btn1").classList.replace("active","button");
        document.querySelector("#btn2").classList.replace("active","button");
        document.querySelector("#btn3").classList.replace("active","button");
        
        //hide 1 n 2 n 3
        document.querySelector(".contentB").style.display = "none"
        document.querySelector(".contentV").style.display = "none"
        document.querySelector(".contentR").style.display = "none"
        
        })




        // mobileee  



        /// BTN 1
    document.querySelector("#btn11").addEventListener("click", function(){
        //show 1
        document.querySelector(".contentB").style.display = "block"
        
        //active 1 
        this.classList.replace("button","active");
        
        //remove 2 n 3 n 4
        document.querySelector("#btn22").classList.replace("active","button");
        document.querySelector("#btn33").classList.replace("active","button");
        document.querySelector("#btn44").classList.replace("active","button");
        
        // hide 2 n 3 n 4
        document.querySelector(".contentV").style.display = "none"
        document.querySelector(".contentR").style.display = "none"
        document.querySelector(".contentC").style.display = "none"
        })
        
    //BTN 2
        document.querySelector("#btn22").addEventListener("click", function(){
        //show 2
        document.querySelector(".contentV").style.display = "block"
        //active 2 
        this.classList.replace("button","active");
        
        //remove 1 n 3 n 4
        document.querySelector("#btn11").classList.replace("active","button");
        document.querySelector("#btn33").classList.replace("active","button");
        document.querySelector("#btn44").classList.replace("active","button");
        
        // hide 1 n 3 n 4
        document.querySelector(".contentB").style.display = "none" 
        document.querySelector(".contentR").style.display = "none"
        document.querySelector(".contentC").style.display = "none"
        
        })
        
    /// BTN 3
        document.querySelector("#btn33").addEventListener("click", function(){
        //show 3
        document.querySelector(".contentR").style.display = "flex"
        
        //active 3 
        this.classList.replace("button","active");
        
        //remove 1 n 2 n 4
        document.querySelector("#btn11").classList.replace("active","button");
        document.querySelector("#btn22").classList.replace("active","button");
        document.querySelector("#btn44").classList.replace("active","button");
        
        //hide 1 n 2 n 4
        document.querySelector(".contentB").style.display = "none"
        document.querySelector(".contentV").style.display = "none"
        document.querySelector(".contentC").style.display = "none"
        
        })
    /// BTN 4
        document.querySelector("#btn44").addEventListener("click", function(){
            //show 3
            document.querySelector(".contentC").style.display = "flex"
            
            //active 3 
            this.classList.replace("button","active");
            
            //remove 1 n 2 n 3
            document.querySelector("#btn11").classList.replace("active","button");
            document.querySelector("#btn22").classList.replace("active","button");
            document.querySelector("#btn33").classList.replace("active","button");
            
            //hide 1 n 2 n 3
            document.querySelector(".contentB").style.display = "none"
            document.querySelector(".contentV").style.display = "none"
            document.querySelector(".contentR").style.display = "none"
            
            })

function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "alokkumax1@gmail.com",
        Password : "DD7D547664C7A429B65C55221FDE2F141B3F",
        To : 'alokkumax1@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New",
        Body : "body"
    }).then(
      message => alert(message)
    );
}