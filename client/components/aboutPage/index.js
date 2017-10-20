import React, {Component} from 'react';

class AboutPage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>Boney Johns</h3>
<fieldset>
    <legend>About Me:</legend>
    <ul>
    <li>
        Passionate developer who loves coding.
    </li>
    <li>
        Over 7 years experience whose primary interest in C# .NET and ASP.NET.
    </li>
    <li>
        Worked in various dot net frameworks and Visual Studio versions, starting from .NET Framework 1.1 and Visual Studio .NET 2003 to 4.6 in Visual Studio 2015.
    </li>
    <li>
        Always look forward to trying out the various features that comes out in new Dot Net releases.
    </li>
    <li>
        Find out the concepts/reasons behind the various behaviours exhibited by the Dot Net Framework.
    </li>
    <li>
        Always strive to develop clean code.
    </li>
    <li>
        I mainly follow<a href="https://twitter.com/jonskeet" target="_blank">Jon Skeet</a>,
        <a href="http://ericlippert.com/" target="_blank">Eric Lippert</a>, <a href="http://odetocode.com/about/scott-allen" target="_blank">Scott Allen</a>, <a href="http://www.wintellect.com/devcenter/author/jeffreyr" target="_blank">Jeffrey Richter</a> for motivation and learning.
    </li>
    <li>
        Main interests in coding are refactoring, trying out the latest technologies, improving algorithm/performance of existing critical code.
    </li>
    <li>
        I always ask the 5 Qns:
        <ol>
            <li>
                What
            </li>
            <li>
                Why
            </li>
            <li>
                When
            </li>
            <li>
                Where
            </li>
            <li>
                How
            </li>
        </ol>
    </li>
</ul>
</fieldset>
<br />

<fieldset>
    <legend>Contact Details:</legend>
    <p>
        <span className="label">Contact 1: </span>
        <span><a href="mailto:bnyjohns@gmail.com">bnyjohns@gmail.com</a></span>
    </p>
    <p>
        <span className="label">Contact 2: </span>
        <span><a href="mailto:bjohns@logitech.com">bjohns@logitech.com</a></span>
    </p>
</fieldset> 
            </div>
        );
    }
}

export default AboutPage;