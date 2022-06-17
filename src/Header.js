import React from 'react';
import SignMeUp from './SignMeUp';

export const Header = () => {
  const signupCallback = (email) => {
    return console.log(`sign up called with email ${email}`);
  };

  return (
    <div className="jumbotron jumbotronheight">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">June 14-22&nbsp;&nbsp;2022</h6>
          <h6 className="text-uppercase">Patient Data, California</h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div>
            <img src="/static/SVCClogo.png" />
          </div>
          <h2>Health Care Center California 2022</h2>
          <div className="row col-12 text-lg-right">
            <SignMeUp signupCallback={signupCallback} />
          </div>
        </div>
      </div>
    </div>
  );
};
