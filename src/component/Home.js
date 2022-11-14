import React from "react";
import Users from "./Users";
import {Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';


function Home() {
    return(
        <>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>firstname</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Users && Users.length > 0 ? Users.map((item) => {
                                return(
                                    <tr class="btnSpace">
                                        <td>{item.name}</td>
                                        <td>{item.firstname}</td>
                                        <td>
                                            <Button>Edit</Button>
                                            <Button>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "no data available"
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}


export default Home