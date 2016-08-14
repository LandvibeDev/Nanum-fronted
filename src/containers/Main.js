/**
 * Created by jgb on 2016-07-26.
 */
import React from 'react';
import Login from './Login'
import Header from '../components/Main/Header'
import Side from '../components/Main/Side'

class Main extends React.Component {
    componentDidMount(prevProps, prveState) {
        $(document).ready(()=> {

            // page is now ready, initialize the calendar...

            $('#calendar').fullCalendar({
                // calendar properties

                businessHours: true,

                editable: true,

                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },

                selectable:true,

                selectHelper:true
            })

        });

    }

    componentDidUpdate(prevProps, prveState) {
        // WHEN COMPONENT UPDATES, INITIALIZE DROPDOWN
        // (TRIGGERED WHEN LOGGED IN)



        $(document).ready(()=> {

            // page is now ready, initialize the calendar...

            $('#calendar').fullCalendar({
                // calendar properties
            })

        });


    }

    render() {
        return (
            <div className="row calendar">
                <div className="col s8" id='calendar'></div>
            </div>
        )
    }
}

export default Main;
