import React, { Component } from 'react'
import Image from '../Image/Image'
import city from '../../images/city.jpg'
import s from './Content.module.css'

class Content extends Component {

  constructor(props) {
    super(props);
    this.setRandomColors = this.setRandomColors.bind(this)
    this.decimalColor = 15 + 15 * 16 + 15 * 16 ** 2 + 15 * 16 ** 3 + 15 * 16 ** 4 + 15 * 16 ** 5
  }

  getRandomColor() {
    return '#' + Math.floor(Math.random() * this.decimalColor).toString(16);
}

  rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

  invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);
    color = parseInt(color, 16);
    color = 0xFFFFFF ^ color;
    color = color.toString(16);
    color = ("000000" + color).slice(-6);
    color = "#" + color;
    return color;
}

  setRandomColors(event) {
    event.target.style.background = this.getRandomColor();
    event.target.style.color = this.invertColor(this.rgb2hex(event.target.style.background));
  }

  render() {
    return (
      <div className={s.contentContainer}>
        <h2>Nedilko Oksana Vitaliivna</h2>
        <p>Birth: 11.02.2003, Khorol, Poltavs'ka oblast', Ukraine</p>
        <p>
            School: Khorols'ka gymnasium, Khorol
            <br/>
            University: National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”
        </p>
        <h3>Hobbies</h3>
        <ul>
            <li>Playing computer games</li>
            <li>Playing basketball</li>
            <li>Listening to music</li>
        </ul>
        <h3>Favourite books</h3>
        <ol>
            <li className={s.mouseover} onClick={this.setRandomColors}>"The End of Eternity" by Isaac Asimov</li>
            <li className={s.mouseover} onClick={this.setRandomColors}>"The Gods Themselves" by Isaac Asimov</li>
            <li>"The Art of Statistics" by David Spiegelhalter</li>
        </ol>
        <p>
            Mohyliv-Podilskyi is a city in the Mohyliv-Podilskyi Raion of the Vinnytsia
            Oblast, Ukraine. Administratively, Mohyliv-Podilskyi is incorporated as a
            town of regional significance. It also serves as the administrative center of
            Mohyliv-Podilskyi Raion, one of twenty-seven districts of Vinnytsia Oblast,
            though it is not a part of the district. It is located in the historic region
            of Podolia, on the border with Bessarabia, Moldova, along the left bank of the
            Dniester river. On the opposite side of the river lies the Moldovan town of
            Otaci, and the two municipalities are connected to each other by a bridge.
        </p>
        <p>
            The first mention of the town dates from 1595. The owner of the town,
            Moldavian hospodar Ieremia Movilă (from which the name Mohyliv, Moghilău/Movilău
            in Romanian) bestowed it as a dowry gift to his daughter, who married into
            the Potocki family of Polish nobility. At that time, the groom named the town
            Movilǎu in honor of his father-in-law. In the first quarter of the 17th century,
            Mohyliv became one of the largest towns in Podolia. It was part of the Podolian
            Voivodeship of the Lesser Poland Province of the Polish Crown. It was a multi-ethnic
            border town composed of Poles, Greeks, Armenians, Serbs, Vlachs and Bosniaks.
            In the 18th century the main churches of the town were built: the Polish-Armenian
            Church of the Visitation of the Blessed Virgin Mary and the Greek St. Nicholas
            Church. Polish rule was interrupted by Ottoman rule as part of Podolia Eyalet.
            During Ottoman rule, it was nahiya centre of Kamaniçe sanjak as Mihaylov.
        </p>
        <a href="https://mpmr.gov.ua/" target="_blank" rel="noreferrer">
            <img
                src={city}
                alt="Mohyliv-Podilskyi"
            />
        </a>
        <Image imgUrl={city} />
      </div>
    )
  }
}

export default Content