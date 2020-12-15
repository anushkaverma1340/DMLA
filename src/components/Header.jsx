import React from "react";
import Anchor from "./Anchor";

function Header(){
    return <table class="header-table"><tr>
            <td>
                <img src="assets/moneymall-logo.png" alt="Money Mall Logo"/>
            </td>
            <td>
                <div class="row">
                    <Anchor text="Credit Cards" />
                    <Anchor text="Loans" />
                    <Anchor text="Islamic" />
                    <Anchor text="Tools" />
                    <div id="btn" class="btn btn-light col-lg-2 header-mg-div">
                        <a class="header-mg">Money Guides </a>
                    </div>
                    <div id="btn" class="btn btn-outline-light col-lg-2 header-li-div">
                        <a class="header-li">Login </a>
                    </div>
                </div>
            </td>
        </tr></table>;
}

export default Header;