/**
 * Created by jgb on 2016-08-21.
 */
import React from 'react';
import Login from '../components/Login/Login';
import Calendar from '../components/Scheduler/Scheduler'


class Main extends React.Component {


    render() {

        const banner=(
            <div id="index-banner" className="parallax-container">
            <div className="section no-pad-bot">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l8">
                            <h1 className="header center teal-text text-lighten-2">Nanum</h1>
                            <div className="row center">
                                <h5 className="header col s12 black-text">Study Managing</h5>
                            </div>
                        </div>
                        <Login/>
                    </div>

                </div>
            </div>
        </div>);

        const content=(
            <div className="container">
            <div className="section">


                <div className="row">
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                            <h5 className="center">Issue</h5>

                            <p className="light">최근 이슈 혹은 자신의 관심 이슈 등</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                            <h5 className="center">최신 과제 or 강의자료 or 알림 </h5>

                            <p className="light">자신의 최신 과제나 자신이 이 사이트에서 썼던 글이나 댓글에 대한 새로운 정보??</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                            <h5 className="center">관심 취업 정보</h5>

                            <p className="light">자신의 관심 취업 정보와 가장 가까운 정보</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>);

        return (
           <div className="login">
               <nav className="white" role="navigation">

                   <div className="nav-wrapper container">
                       <a id="logo-container" href="#" className="brand-logo center" >Nanum</a>
                   </div>
               </nav>
               {banner}
               {content}
           </div>
        )
    }
}

export default Main;
