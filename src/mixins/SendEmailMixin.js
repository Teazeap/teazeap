import axios from "axios";

export default {
  data() {
    return {
      signature: `<div> <div dir='auto'>Kind Regards </div> <font color='#888888'>-- <br><div dir='ltr' data-smartmail='gmail_signature'><div dir='ltr'><font face='monospace' size='4'><b>TeaZeaP Team, </b></font><div><font face='monospace' size='1'><b>Description</b> : Recruiting Agency</font><div><font face='monospace' size='1'><b>Location    </b>: Hsinchu City, Taiwan</font></div><div><font face='monospace' size='1'><b>Email       </b>: <a href='mailto:teazeaprecruitingagency@gmail.com' target='_blank'>teazeaprecruitingagency@<wbr>gmail.com</a>  </font></div><div><span style='font-family:monospace'><font size='1'><b>Tel         </b>: +886909097544</font></span><font face='monospace'><br></font></div><div><font face='monospace'><b>visit us at</b> <a href='http://www.teazeap.com' target='_blank' data-saferedirecturl='https://www.google.com/url?q=http://www.teazeap.com&source=gmail&ust=1669819467307000&usg=AOvVaw055oh59chJ-jKhpWl-XeXy'>www.teazeap.com</a></font></div><div><br></div><div><font face='monospace'><br></font></div></div></div></div> </font>`
    };
  },
  methods: {
    sendEmail(email) {
      let formattedEmail = this.formatEmail(email);

      try {
        axios.post(process.env.VUE_APP_EMAIL_API, {
          email: email.address,
          subject: email.subject,
          body: formattedEmail
        });
      } catch (error) {}
    },
    formatEmail(email) {
      const { regards, message } = email;
      let formattedEmail = `${message}${this.handleSignature(regards)}`;
      return formattedEmail;
    },
    handleSignature(regards) {
      return `
      <div>
      <div dir="auto">${regards}&nbsp;</div>
      <font color="#888888">-- <br><div dir="ltr" data-smartmail="gmail_signature"><div dir="ltr"><font face="monospace" size="4"><b>TeaZeaP Team,&nbsp;</b></font><div><font face="monospace" size="1"><b>Description</b> : Recruiting Agency</font><div><font face="monospace" size="1"><b>Location&nbsp; &nbsp;&nbsp;</b>: Hsinchu City, Taiwan</font></div><div><font face="monospace" size="1"><b>Email&nbsp; &nbsp; &nbsp; &nbsp;</b>:&nbsp;<a href="mailto:teazeaprecruitingagency@gmail.com" target="_blank">teazeaprecruitingagency@<wbr>gmail.com</a>&nbsp;&nbsp;</font></div><div><span style="font-family:monospace"><font size="1"><b>Tel&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</b>: +886909097544</font></span><font face="monospace"><br></font></div><div><font face="monospace"><b>visit us at</b>&nbsp;<a href="http://www.teazeap.com" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.teazeap.com&amp;source=gmail&amp;ust=1669819467307000&amp;usg=AOvVaw055oh59chJ-jKhpWl-XeXy">www.teazeap.com</a></font></div><div><br></div><div><font face="monospace"><br></font></div></div></div></div>
      </font>
`;
    }
  }
};
