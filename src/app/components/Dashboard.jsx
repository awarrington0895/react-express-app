import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';

export const Dashboard = ({groups}) => (
  <div>
    <h2>Dashboard</h2>
    {groups.map(group => (<div key={group.id}>
      <ConnectedTaskList id={group.id} name={group.name} />
    </div>))}
  </div>
);

const mapStateToProps = (state) => ({
  groups: state.groups
});

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
