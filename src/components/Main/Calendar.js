/**
 * Created by jgb on 2016-08-19.
 */
import React from 'react';
import {} from 'react-materialize';


class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            eventTitle: ""
        };

    }
    componentDidMount(prevProps, prveState) {

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
                    $('#modal1').openModal();
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

                    $('#modal1').openModal();


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
        return (
            <div>
            <div className="col s8" id='calendar'>
            </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>title</h4>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea">
                                            {this.state.eventTitle}
                                        </textarea>
                                        <label for="textarea1">Textarea</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                                    <div className="input-field col s3">
                                        <select value="4">
                                            <option value="4" disabled>시간을 정하세요</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <label>시작시간</label>
                                    </div>
                                    <div className="input-field col s3">
                                        <select value="4">
                                            <option value="4" disabled>분을 정하세요</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <label>시작분</label>
                                        </div>
                            <div className="input-field col s3">
                                <select value="4">
                                    <option value="4" disabled>시간을 정하세요</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <label>종료시간</label>
                            </div>
                            <div className="input-field col s3">
                                <select value="4">
                                    <option value="4" disabled>분을 정하세요</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <label>종료분</label>
                            </div>
                        </div>
                        <div className="row">
                            <form action="#">
                                <p className="col s3">
                                    <input name="group1" type="radio" id="test1" />
                                    <label for="test1">Red</label>
                                </p>
                                <p className="col s3">
                                    <input name="group1" type="radio" id="test2" />
                                    <label for="test2">Yellow</label>
                                </p>
                                <p className="col s3">
                                    <input className="with-gap" name="group1" type="radio" id="test3"  />
                                    <label for="test3">Green</label>
                                </p>
                                <p className="col s3">
                                    <input name="group1" type="radio" id="test4" disabled="disabled" />
                                    <label for="test4">Brown</label>
                                </p>
                            </form>

                        </div>

                    </div>
                    <div className="modal-footer">
                        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calendar;
