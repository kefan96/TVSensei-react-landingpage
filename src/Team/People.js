import React, {Component} from 'react';
import './People.css';
import Person from './Person';

class People extends Component {

    render(){
        return(
            <section className="people">
                <Person 
                    img="https://i1.wp.com/tvsensei.com/wp-content/uploads/2019/05/IMG_5991.jpg?resize=768%2C512&ssl=1"
                    intro="Henry founded TVSensei in January 2019. Henry’s education is ranged and pushes him to create new curriculum that is universally approachable. Henry attended PS78—a local public elementary school, Little Red School House—a private middle school. LaGuardia High School for the Performing Arts—a specialized public high school, and Oberlin College—an elite liberal arts college. After graduating from Oberlin with a double major in East Asian Studies and Music, he was the 2016-2018 Oberlin Shansi teaching fellow at J.F. Oberlin University in Tokyo, Japan. Teaching English as a Second Language, Henry saw what methods of teaching worked and didn’t work for his students and was inspired to create a new method, which became TVSensei. Henry currently lives in his hometown, New York City, where he works part-time as a barista at “Takumen” and runs “Karuta NYC,” New York’s first ever Karuta club. Henry speaks fluent Japanese and is constantly in a battle to regain his French."
                    title="CEO/Founder"
                    name="Henry Aberle"
                />
                <Person 
                    img="https://i2.wp.com/tvsensei.com/wp-content/uploads/2019/10/IMG_5453.jpg?resize=768%2C768&ssl=1https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                    intro="Kefan is a web developer creating websites and software for TVSensei. He was born in China, and he grew up in a beautiful city named Hangzhou. After his junior year in college studying Computer Science in China, Kefan decided to transfer to Ohio State University, which totally changed his life. Kefan moved to New York and joined TVSensei as a developer in July 2019. Kefan was drawn to TVSensei’s vision, having learned English with TV as a student in China. Kefan enjoys expanding his skills as a programmer in his day to day work at TVSensei. Additionally, Kefan plays badminton at a competitive level and has played clarinet for more than ten years. As a developer, Kefan loves writing codes in React, Node.js, Python and Java."
                    title="CTO/Full Stack Developer"
                    name="Kefan Yang"
                />
            </section>
        );
    }
}

export default People;