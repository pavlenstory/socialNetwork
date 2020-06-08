import {connect} from "react-redux";
import {getUnFollow, getFollow, getUsers} from "../../Redux/usersReducer";
import * as React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    getUnFollow={this.props.getUnFollow}
                    getFollow={this.props.getFollow}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    followingInProgress={this.props.followingInProgress}
                    onPageChanged={this.onPageChanged}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(connect(mapStateToProps, {getUnFollow, getFollow, getUsers}))(UsersContainer);


