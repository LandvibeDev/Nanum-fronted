/**
 * Created by jgb on 2016-08-19.
 */
import React from 'react';
import { calendar_click } from '../../actions/Calendar'
import { connect } from 'react-redux';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            check:false
        };

    }
    componentDidMount(prevProps, prveState) {
        const test=this.props.calendar_click;

        $(document).ready(()=> {
            $('select').material_select();

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

                selectHelper:true,

                dayClick: function(date, jsEvent, view) {


                    // change the day's background color just for fun
                    //$(this).css('background-color', 'red');

                },
                select: function(start, end) {
                    test(start,end);
                    //let title = prompt('Event Title:');
                    let eventData;
                    if (title) {
                        eventData = {
                            title: title,
                            start: start,
                            end: end
                        };
                        $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                    }
                    $('#calendar').fullCalendar('unselect');
                },

                eventClick: function(calEvent, jsEvent, view) {
                    //alert('Event: ' + calEvent.title);
                    test(calEvent.start,calEvent.end,calEvent.title);




                    // change the border color just for fun
                    // $(this).css('border-color', 'red');

                }
                , eventSources: [

                    // your event source
                    {
                        events: [ // put the array in the `events` property

                            {
                                title  : 'event1',
                                start  : '2016-08-17'
                            },
                            {
                                title  : 'event2',
                                start  : '2016-08-05',
                                end    : '2016-08-07'
                            },
                            {
                                title  : 'event3',
                                start  : '2016-08-09',
                                end    : '2016-08-10'
                            }
                        ],
                        //color: '',     // an option!
                        //textColor: 'yellow' // an option!
                    }

                    // any other event sources...

                ]

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
        const test=(
            <div className="col s4">
                <h1 className="center">Content</h1>
                <p>start:{this.props.start}</p>
                <p>end:{this.props.end} </p>
                <p>title:{this.props.title} </p>

                <form action="/" className="row">
                    <p className="col s3">
                        <input name="group1" type="radio" id="test1" />
                        <label for="test1">Red</label>
                    </p>
                    <p className="col s3">
                        <input name="group1" type="radio" id="test2" />
                        <label for="test2">Yellow</label>
                    </p>
                    <p className="col s3">
                        <input class="with-gap" name="group1" type="radio" id="test3"  />
                        <label for="test3">Green</label>
                    </p>
                    <p className="col s3">
                        <input name="group1" type="radio" id="test4" disabled="disabled" />
                        <label for="test4">Brown</label>
                    </p>
                </form>

                <a className="waves-effect waves-green btn">확인</a>
            </div>
        )

        return (
            <div>
                <div className="col s8" id='calendar'></div>


                {this.props.clicked ? test:undefined }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        clicked:state.Calendar.toJS().status,
        start:state.Calendar.toJS().start.toString(),
        end:state.Calendar.toJS().end.toString(),
        title:state.Calendar.toJS().title
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        calendar_click: (start,end,title) => {
            return dispatch(calendar_click(start,end,title));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Calendar);


