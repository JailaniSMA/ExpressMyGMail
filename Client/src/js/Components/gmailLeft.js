var React=require("react");
var GmailLeft1=require("./GmailLeft1.js");
var GmailLeft = React.createClass({
 render: function() {

   var rows = [];

    this.props.data.forEach(function(data) {
      <ul className="dropdown-menu">
            <li><a href="#">INBOX</a></li>
            <li><a href="#">ALL MAIL</a></li>
            <li><a href="#">SENT</a></li>
            <li><a href="#draft">DRAFT </a></li>
            <li><a href="#">FAVOURITE </a></li>
            <li><a href="#">TRASH </a></li>
              <li role="separator" className="divider"></li>
        </ul>
    if(data.name==="INBOX"||data.name==='SENT'||data.name==='TRASH'||data.name==="IMPORTANT"||data.name==="DRAFT")
    {
      rows.push(<GmailLeft1 submitLabelId={this.props.submitLabelId} data={data} key={data.name} />);
    }
} .bind(this));
    return (
      <table >

      <tbody>
        <a href="#myModal" data-toggle="modal"  title="Compose" className="btn btn-compose">Compose</a>
        {rows}
        </tbody>

      </table>
    );
 }
});
module.exports=GmailLeft;
