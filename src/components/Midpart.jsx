import React from "react";

function Midpart(props){
return <div id="row" class="row mp-div">
    <div class="col-md-6 mp-div1">
        <h1>Your Credit, Sorted.</h1>
        <h2>Check your Credit Score</h2>
        <h2>& Unlock your Borrowing power</h2>
        <p>A better score means better deals</p>
        <div class="ic-div">
            <div class="input-check input-group mb-3">
                <input type="text" class="input form-control" placeholder="Enter your mobile number" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <button class="check btn btn-light" type="button" id="button-addon1">CHECK MY SCORE</button>
            </div>
        </div>
    </div>
    <div class="col-md-3 mp-div2">
        <img class="score-img" src="assets/credit-score-background-image.png" alt="Credit Score"/>
    </div>
</div>;
}

export default Midpart;