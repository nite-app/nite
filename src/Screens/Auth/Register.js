import React from "react";

export default function Register() {
  return (
    <>
      <div className="fullpage">
        <div className="formcontainer">
          <div class="acont">
            <div class="back">
              <a href="../../index.html">
                <img
                  src="../../img/chevron-left-solid.svg"
                  alt=""
                  width="25px"
                />
              </a>
            </div>
            <div class="ctsplit">
              <div class="formcontainer">
                <h1 class="formttl">Create your account.</h1>
                <div class="changescreen">
                  <p class="formsub">Already a member?&nbsp;</p>
                  <a class="formsub2" href="./login.html">
                    Login
                  </a>
                </div>
                <hr />

                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="regemail"
                  class="field"
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="psw"
                  id="regpsw"
                  class="field"
                  required
                />

                <input
                  type="password"
                  placeholder="Repeat Password"
                  name="psw-repeat"
                  id="psw-repeat"
                  class="field"
                  required
                />
                <hr />
                <button type="submit" class="registerbtn">
                  Register
                </button>
              </div>
              <div class="asc2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
