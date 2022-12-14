# [Simple Pendulum Application](https://simple-pendulum-gevorgalaverdyan.onrender.com)

<i>Note: Due to time shortage I made some required features were done alternatively, <br>For more information: </i><a href='#click'>Click here</a>
<br><br>
This project is REST API which simulates Simple Pendulum(s).
</br>
Project's concepts and technologies include:

    > REST API
        - HTTP :
            -> POST
            -> GET
            -> PUT
            -> DELETE

    > Node JS / Express
    > MongoBD
    > Architectural Pattern
    > EJS: Embedded JavaScript *(instead of HTML) 
    > CSS

## User GUIDE
<hr>
<table>
    <tr>
        <td><img src="./imgs/config.png"/></td>
        <td>The server will do a <code>GET</code> request to <code>localhost:PORT/</code>
        and render the config page as a response.<br> 
        The main page will be the Configs page where the users can add pendulums. The range of values is indicated in the placeholder of the input field. <br>
        The DB has already some pendulum instances in it, but you can add as many as you desire.
        Once you filled all the input fields, click Submit.
        It will do a <code>HTTP POST</code> and if the data is valid save in the MongoDB Collection. A 201 status will be sent along with the new instance.
        Then, click View Simulation to go to simulation page.  
        </td>
    </tr>
    <tr>
        <td>The server will do a <code>GET</code> request to <code>localhost:PORT/simulation</code> and render the simulation page as a response.<br>
        The Top white rectangle is a 2D context CANVAS which will draw the simulation. <br>The Bottom white rectangle is also a TextBox which will display the information of the pendulums which are periodically polled (each 5 sec) and send a <code>PUT</code> request which updates the angle of the pendlum and the location of the pendulum according to x-axis.<br>
        </td>
        <td><img src="./imgs/simulation.png"/></td>  
    </tr>
    <tr>
        <td><img src="./imgs/start.png"/></td>  
        <td>The START button will send a <code>GET</code> Request to get all the pendulum instances, then the response is mapped and each element in the Pendulums collection is simulated through the <code>PendulumSim</code> method.<br><br>
        The STOP button will clear the whole collection by sending a <code>DELETE</code> request. Refresh the page to stop the ongoing simulation.<br><br>
        The pendulums are polled each 5 seconds to get the current x-axis location and the angle, but if you want to get the current angle and it will send a <code>PUT</code> request and update the collection and will return a response of the updated collection which is displayed in the TextBox.
        </td>
    </tr>
</table>

## Application Architecture:
<hr>
<table>
    <tr>
        <td><img src="./imgs/architecture.png"/></td>
        <td><br>Model: <img src="./imgs/model.png"/><br><br>
        MongoDB: <img src="./imgs/mongodb.png"/>
        Controller: takes care of requests & actions<br></td>
    </tr>
</table>

#### The drawing process on Canvas
<hr>
<table>
    <tr>
        <td>There is a function in views/index.ejs called <pre>
        function PendulumSim(
        length_m,
        gravity,
        initialAngle_rad,
        timestep_ms,
        callback
      ) {
        let velocity = 0;
        let angle = initialAngle_rad;
        let k = -gravity / length_m;
        let timestep_s = timestep_ms / 1000;
        //every timestep_s call this function to get the new calculated angle
        return setInterval(function () {
          const acceleration = k * Math.sin(angle);
          velocity += acceleration * timestep_s;
          angle += velocity * timestep_s;
          callback(angle);
        }, timestep_ms);
      }
        </pre>
        with a callback function which is continuously changes the angle of the pendulum based on the pre-calculated velocity, angle, k, timeset_s. <br>The pendulums X and Y position is calculated in the function call's callback function by doing simple geometry: 
        <pre>              const ballX = Math.sin(angle) * rPend;
              const ballY = Math.cos(angle) * rPend;
<br>
                sin k = opp/hyp = ballX/rPend
                cos k = adj/hyp = ballY/rPend
<br>
               ballX: opp = sin k * hyp
<br>
                       /|
                 hyp  / | ballY
                     /__|
                    ballX
              </pre>
              This new position is also saved in a varabiable which will be used in the polling process.
      </td>
    </tr>
</table>

### API Endpoints
<hr>
<table>
    <tr>
        <td><img src="./imgs/endpoints.png"/></td>
    </tr>
</table>

### Sample Endpoints using Postman
<hr>
<table>
    <tr>
        <td><img src="./imgs/GET.png"/></td>
        <td>[HttpGET] Gets all the pendulums in the collection</td>
    </tr>
    <tr>
        <td>[HttpPost] Creates a new command, returns the new pendulum with status code of "201 Created"</td>
        <td><img src="./imgs/post.png"/></td>  
    </tr>
</table>

<i>*Note: EJS was used as an alternative to HTML because the backend wouldn't render a static HTML file. <br>The embedded feature of EJS was not used to stick to HTML format.</i>

<h3 id='click'>Complications and Alternative Solutions</h3>
<hr>
I was really occupied during the week of the assignment, so finding time was really difficult. However, I did my best to get a good final result.<br>

- The pause button: I attempting many alternatives to stop the canvas from drawing (ex: stopping the drawing process, final poll and restart simulation based on last poll), but I was not able to complete it. As an alternative, my program polls every 5sec and diplays the polled info in the TextBox. The Pause/Resume button has an OnClick with polls at the users will.

- Instead of running the pendulum instances on different TCP ports, they are configured from the Configs page by sending a POST to the DB and they are displayed in the Simulation page. 

<br>
<i>© 2022 | All Rights Reserved - Gevorg Alaverdyan</i>