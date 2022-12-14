# [Simple Pendulum Application](https://simple-pendulum-gevorgalaverdyan.onrender.com)


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
