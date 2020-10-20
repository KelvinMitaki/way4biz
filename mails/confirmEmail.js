function processMore(more) {
  if (!more) {
    return null;
  } else {
    return `<p class="text-center">
        After confirmation use the password
        <strong
          style="font-weight: bolder !important"
          >${more["password"]}</strong
        >
        to login.
      </p>`;
  }
}

module.exports = function confirmEmail(url, more = null) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html
    data-editor-version="2"
    class="sg-campaigns"
    xmlns="http://www.w3.org/1999/xhtml"
  >
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
        <style type="text/css">
          body {
            width: 600px;
            margin: 0 auto;
          }
          table {
            border-collapse: collapse;
          }
          table,
          td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
          img {
            -ms-interpolation-mode: bicubic;
          }
        </style>
      <![endif]-->
      <style type="text/css">
        body,
        p,
        div {
          font-family: arial, helvetica, sans-serif;
          font-size: 14px;
        }
        body {
          color: #000000;
        }
        body a {
          color: #42ee99;
          text-decoration: none;
        }
        p {
          margin: 0;
          padding: 0;
        }
        table.wrapper {
          width: 100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img.max-width {
          max-width: 100% !important;
        }
        .column.of-2 {
          width: 50%;
        }
        .column.of-3 {
          width: 33.333%;
        }
        .column.of-4 {
          width: 25%;
        }
        @media screen and (max-width: 480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
            text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table.wrapper-mobile {
            width: 100% !important;
            table-layout: fixed;
          }
          img.max-width {
            height: auto !important;
            max-width: 100% !important;
          }
          a.bulletproof-button {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .columns {
            width: 100% !important;
          }
          .column {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
      </style>
      <!--user entered Head Start-->
  
      <!--End Head user entered-->
    </head>
    <body>
      <center
        class="wrapper"
        data-link-color="#42ee99"
        data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#000000;"
      >
        <div class="webkit">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            class="wrapper"
            bgcolor="#000000"
          >
            <tbody>
              <tr>
                <td valign="top" bgcolor="#000000" width="100%">
                  <table
                    width="100%"
                    role="content-container"
                    class="outer"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td width="100%">
                          <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <!--[if mso]>
      <center>
      <table><tr><td width="600">
    <![endif]-->
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    style="width: 100%; max-width: 600px"
                                    align="center"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          role="modules-container"
                                          style="
                                            padding: 0px 0px 0px 0px;
                                            color: #000000;
                                            text-align: left;
                                          "
                                          bgcolor="#FFFFFF"
                                          width="100%"
                                          align="left"
                                        >
                                          <table
                                            class="module preheader preheader-hide"
                                            role="module"
                                            data-type="preheader"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="
                                              display: none !important;
                                              mso-hide: all;
                                              visibility: hidden;
                                              opacity: 0;
                                              color: transparent;
                                              height: 0;
                                              width: 0;
                                            "
                                          >
                                            <tbody>
                                              <tr>
                                                <td role="module-content">
                                                  <p>Show What You Know!</p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="spacer"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="vB9TDziyvx65CC2nx3oyRH"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    padding: 0px 0px 20px 0px;
                                                  "
                                                  role="module-content"
                                                  bgcolor="#000000"
                                                ></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="wrapper"
                                            role="module"
                                            data-type="image"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="uXsDxMnn1bRMmDcX8NB6rW"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    font-size: 6px;
                                                    line-height: 10px;
                                                    padding: 30px 0px 30px 0px;
                                                  "
                                                  bgcolor="#000000"
                                                  valign="top"
                                                  align="center"
                                                >
                                                  <img
                                                    class="max-width"
                                                    border="0"
                                                    style="
                                                      display: block;
                                                      color: #000000;
                                                      text-decoration: none;
                                                      font-family: Helvetica,
                                                        arial, sans-serif;
                                                      font-size: 16px;
                                                      max-width: 50% !important;
                                                      width: 50%;
                                                      height: auto !important;
                                                    "
                                                    src="https://marketing-image-production.s3.amazonaws.com/uploads/ec77ef33b95b4cb71b77f85ff3f632b501dba916e30cd5bf00c4c51bc0ceeb606668f7ae5bd99f9c95fb4fa20ba910aaafeb9724ceb0289c441a541bec24858e.png"
                                                    alt="SongRiddle"
                                                    width="300"
                                                    data-responsive="true"
                                                    data-proportionally-constrained="false"
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="text"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="hL6wjQ2qknNd5qDwT1p7Up"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    background-color: #000000;
                                                    padding: 10px 20px 10px 20px;
                                                    line-height: 40px;
                                                    text-align: justify;
                                                  "
                                                  height="100%"
                                                  valign="top"
                                                  bgcolor="#000000"
                                                >
                                                  <div>
                                                    <h1
                                                      style="text-align: center"
                                                    >
                                                      <span
                                                        style="
                                                          color: #ffffff;
                                                          font-size: 28px;
                                                          font-family: verdana,
                                                            geneva, sans-serif;
                                                        "
                                                        ><strong
                                                          >Welcome to
                                                          SongRiddle!</strong
                                                        ></span
                                                      >
                                                    </h1>
                                                    <div></div>
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="wrapper"
                                            role="module"
                                            data-type="image"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="37c1DUYE1TN31PTwSNoaE7"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    font-size: 6px;
                                                    line-height: 10px;
                                                    padding: 0px 0px 0px 0px;
                                                    background-color: #000000;
                                                  "
                                                  valign="top"
                                                  align="center"
                                                >
                                                  <img
                                                    class="max-width"
                                                    border="0"
                                                    style="
                                                      display: block;
                                                      color: #000000;
                                                      text-decoration: none;
                                                      font-family: Helvetica,
                                                        arial, sans-serif;
                                                      font-size: 16px;
                                                      max-width: 100% !important;
                                                      width: 100%;
                                                      height: auto !important;
                                                    "
                                                    src="https://marketing-image-production.s3.amazonaws.com/uploads/c4f7e550ea6e1dc8618193f5d31ae9c2aba8f542a5c7b20de199ef019965e396a34356c8181ce010e4a180058e1309fb033edd29246b3820fa2126343c17292c.png"
                                                    alt=""
                                                    width="600"
                                                    data-responsive="true"
                                                    data-proportionally-constrained="false"
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="text"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="qk51Jjn4bm3rn2Yb31Dxzb"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    background-color: #ffffff;
                                                    padding: 50px 50px 10px 50px;
                                                    line-height: 22px;
                                                    text-align: center;
                                                  "
                                                  height="100%"
                                                  valign="top"
                                                  bgcolor="#ffffff"
                                                >
                                                  <div>
                                                    <div
                                                      style="
                                                        font-family: inherit;
                                                        text-align: inherit;
                                                      "
                                                    >
                                                      <span
                                                        style="
                                                          font-size: 24px;
                                                          font-family: verdana,
                                                            geneva, sans-serif;
                                                        "
                                                        ><strong
                                                          >YOU'VE JOINED A
                                                          COMMUNITY FOR MUSIC
                                                          ENTHUSIASTS AND TRIVIA
                                                          LOVERS.&nbsp;</strong
                                                        ></span
                                                      >
                                                    </div>
                                                    <div></div>
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="text"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="iTBXe9c6QUCujvmJs8hYKr"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    background-color: #ffffff;
                                                    padding: 40px 40px 40px 40px;
                                                    line-height: 22px;
                                                    text-align: inherit;
                                                  "
                                                  height="100%"
                                                  valign="top"
                                                  bgcolor="#ffffff"
                                                >
                                                  <div>
                                                    <div
                                                      style="
                                                        font-family: inherit;
                                                        text-align: inherit;
                                                      "
                                                    >
                                                      <span
                                                        style="
                                                          font-size: 16px;
                                                          font-family: verdana,
                                                            geneva, sans-serif;
                                                        "
                                                        >Pick one of your favorite
                                                        artists and start
                                                        listening to their radio
                                                        station. Soon, you’ll hear
                                                        songs by similar
                                                        artists…but we don’t
                                                        reveal who they are!
                                                        That’s the riddle, and
                                                        your mission is to solve
                                                        it.</span
                                                      >
                                                    </div>
                                                    <div
                                                      style="
                                                        font-family: inherit;
                                                        text-align: inherit;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                    <div
                                                      style="
                                                        font-family: inherit;
                                                        text-align: inherit;
                                                      "
                                                    >
                                                      <span
                                                        style="
                                                          font-size: 16px;
                                                          font-family: verdana,
                                                            geneva, sans-serif;
                                                        "
                                                        >Guess the artist, get it
                                                        right, and prove that you
                                                        know your musical genre
                                                        like no one else!</span
                                                      >
                                                    </div>
                                                    <div></div>
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="module"
                                            data-role="module-button"
                                            data-type="button"
                                            role="module"
                                            style="table-layout: fixed"
                                            width="100%"
                                            data-muid="qY8ouFUf6bFVP8tHkQ5gq7"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="center"
                                                  bgcolor="#ffffff"
                                                  class="outer-td"
                                                  style="
                                                    padding: 20px 20px 60px 20px;
                                                    background-color: #ffffff;
                                                  "
                                                >
                                                  <table
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    class="button-css__deep-table___2OZyb wrapper-mobile"
                                                    style="text-align: center"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          align="center"
                                                          bgcolor="#00dc73"
                                                          class="inner-td"
                                                          style="
                                                            border-radius: 6px;
                                                            font-size: 16px;
                                                            text-align: center;
                                                            background-color: inherit;
                                                          "
                                                        >
                                                          <a
                                                            style="
                                                              background-color: #00dc73;
                                                              border: 0px solid
                                                                #08b65d;
                                                              border-color: #08b65d;
                                                              border-radius: 0px;
                                                              border-width: 0px;
                                                              color: #ffffff;
                                                              display: inline-block;
                                                              font-family: verdana,
                                                                geneva, sans-serif;
                                                              font-size: 16px;
                                                              font-weight: normal;
                                                              letter-spacing: 3px;
                                                              line-height: 30px;
                                                              padding: 12px 18px
                                                                12px 18px;
                                                              text-align: center;
                                                              text-decoration: none;
                                                              border-style: solid;
                                                            "
                                                            href=""
                                                            target="_blank"
                                                            >PLAY TRIVIA!</a
                                                          >
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="wrapper"
                                            role="module"
                                            data-type="image"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="3Aagmop5AhcW2BFjGgfLGu"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    font-size: 6px;
                                                    line-height: 10px;
                                                    padding: 0px 0px 0px 0px;
                                                  "
                                                  valign="top"
                                                  align="center"
                                                >
                                                  <img
                                                    class="max-width"
                                                    border="0"
                                                    style="
                                                      display: block;
                                                      color: #000000;
                                                      text-decoration: none;
                                                      font-family: Helvetica,
                                                        arial, sans-serif;
                                                      font-size: 16px;
                                                      max-width: 100% !important;
                                                      width: 100%;
                                                      height: auto !important;
                                                    "
                                                    src="https://marketing-image-production.s3.amazonaws.com/uploads/7d3a644f0bab87f4a5d64a2d9a623138d9e415852fbccd6dc4393ba4c725b3ab55a101ae8022e1fc8fd1430601b482e38daf0aa90927ae1d09e74eeb93cf10ec.png"
                                                    alt=""
                                                    width="600"
                                                    data-responsive="true"
                                                    data-proportionally-constrained="false"
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="spacer"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="2ga5f7koD5ApvUfnqUK6aT"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    padding: 0px 0px 30px 0px;
                                                  "
                                                  role="module-content"
                                                  bgcolor="#000000"
                                                ></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="divider"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="c3nRrjMndqXf1snYDFPSF9"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="padding: 0px 0px 0px 0px"
                                                  role="module-content"
                                                  height="100%"
                                                  valign="top"
                                                  bgcolor="#000000"
                                                >
                                                  <table
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    align="center"
                                                    width="100%"
                                                    height="3px"
                                                    style="
                                                      line-height: 3px;
                                                      font-size: 3px;
                                                    "
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="
                                                            padding: 0px 0px 3px
                                                              0px;
                                                          "
                                                          bgcolor="#42ee99"
                                                        ></td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="spacer"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="pa9PeYjCEFyByuP5878Sd2"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    padding: 0px 0px 30px 0px;
                                                  "
                                                  role="module-content"
                                                  bgcolor="#000000"
                                                ></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="social"
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="n7FceQWVnLmounEt32B1gj"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  valign="top"
                                                  style="
                                                    padding: 0px 0px 0px 0px;
                                                    font-size: 6px;
                                                    line-height: 10px;
                                                    background-color: #000000;
                                                  "
                                                  align="center"
                                                >
                                                  <table align="center">
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="padding: 0px 5px"
                                                        >
                                                          <a
                                                            role="social-icon-link"
                                                            href="https://www.facebook.com/sendgrid/"
                                                            target="_blank"
                                                            alt="Facebook"
                                                            title="Facebook"
                                                            style="
                                                              display: inline-block;
                                                              background-color: #00dc73;
                                                              height: 30px;
                                                              width: 30px;
                                                            "
                                                          >
                                                            <img
                                                              role="social-icon"
                                                              alt="Facebook"
                                                              title="Facebook"
                                                              src="https://marketing-image-production.s3.amazonaws.com/social/white/facebook.png"
                                                              style="
                                                                height: 30px;
                                                                width: 30px;
                                                              "
                                                              height="30"
                                                              width="30"
                                                            />
                                                          </a>
                                                        </td>
                                                        <td
                                                          style="padding: 0px 5px"
                                                        >
                                                          <a
                                                            role="social-icon-link"
                                                            href="https://twitter.com/sendgrid?ref_src=twsrc%5egoogle%7ctwcamp%5eserp%7ctwgr%5eauthor"
                                                            target="_blank"
                                                            alt="Twitter"
                                                            title="Twitter"
                                                            style="
                                                              display: inline-block;
                                                              background-color: #00dc73;
                                                              height: 30px;
                                                              width: 30px;
                                                            "
                                                          >
                                                            <img
                                                              role="social-icon"
                                                              alt="Twitter"
                                                              title="Twitter"
                                                              src="https://marketing-image-production.s3.amazonaws.com/social/white/twitter.png"
                                                              style="
                                                                height: 30px;
                                                                width: 30px;
                                                              "
                                                              height="30"
                                                              width="30"
                                                            />
                                                          </a>
                                                        </td>
                                                        <td
                                                          style="padding: 0px 5px"
                                                        >
                                                          <a
                                                            role="social-icon-link"
                                                            href="https://www.instagram.com/sendgrid/?hl=en"
                                                            target="_blank"
                                                            alt="Instagram"
                                                            title="Instagram"
                                                            style="
                                                              display: inline-block;
                                                              background-color: #00dc73;
                                                              height: 30px;
                                                              width: 30px;
                                                            "
                                                          >
                                                            <img
                                                              role="social-icon"
                                                              alt="Instagram"
                                                              title="Instagram"
                                                              src="https://marketing-image-production.s3.amazonaws.com/social/white/instagram.png"
                                                              style="
                                                                height: 30px;
                                                                width: 30px;
                                                              "
                                                              height="30"
                                                              width="30"
                                                            />
                                                          </a>
                                                        </td>
                                                        <td
                                                          style="padding: 0px 5px"
                                                        >
                                                          <a
                                                            role="social-icon-link"
                                                            href="https://www.pinterest.com/sendgrid/"
                                                            target="_blank"
                                                            alt="Pinterest"
                                                            title="Pinterest"
                                                            style="
                                                              display: inline-block;
                                                              background-color: #00dc73;
                                                              height: 30px;
                                                              width: 30px;
                                                            "
                                                          >
                                                            <img
                                                              role="social-icon"
                                                              alt="Pinterest"
                                                              title="Pinterest"
                                                              src="https://marketing-image-production.s3.amazonaws.com/social/white/pinterest.png"
                                                              style="
                                                                height: 30px;
                                                                width: 30px;
                                                              "
                                                              height="30"
                                                              width="30"
                                                            />
                                                          </a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="spacer"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="vHVg85Rtcz7gagZZquA4Bw"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    padding: 0px 0px 30px 0px;
                                                  "
                                                  role="module-content"
                                                  bgcolor="#000000"
                                                ></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <div
                                            data-role="module-unsubscribe"
                                            class="module unsubscribe-css__unsubscribe___2CDlR"
                                            role="module"
                                            data-type="unsubscribe"
                                            style="
                                              background-color: #000000;
                                              color: #ffffff;
                                              font-size: 12px;
                                              line-height: 20px;
                                              padding: 16px 16px 16px 16px;
                                              text-align: center;
                                            "
                                            data-muid="vqq9VGfbTmLsFG2U3YC8Fh"
                                          >
                                            <div class="Unsubscribe--addressLine">
                                              <p
                                                class="Unsubscribe--senderName"
                                                style="
                                                  font-family: verdana, geneva,
                                                    sans-serif;
                                                  font-size: 12px;
                                                  line-height: 20px;
                                                "
                                              >
                                                {{Sender_Name}}
                                              </p>
                                              <p
                                                style="
                                                  font-family: verdana, geneva,
                                                    sans-serif;
                                                  font-size: 12px;
                                                  line-height: 20px;
                                                "
                                              >
                                                <span
                                                  class="Unsubscribe--senderAddress"
                                                  >{{Sender_Address}}</span
                                                >,
                                                <span
                                                  class="Unsubscribe--senderCity"
                                                  >{{Sender_City}}</span
                                                >,
                                                <span
                                                  class="Unsubscribe--senderState"
                                                  >{{Sender_State}}</span
                                                >
                                                <span
                                                  class="Unsubscribe--senderZip"
                                                  >{{Sender_Zip}}</span
                                                >
                                              </p>
                                            </div>
                                            <p
                                              style="
                                                font-family: verdana, geneva,
                                                  sans-serif;
                                                font-size: 12px;
                                                line-height: 20px;
                                              "
                                            >
                                              <a
                                                class="Unsubscribe--unsubscribeLink"
                                                href="{{{unsubscribe}}}"
                                                style="color: #42ee99"
                                                >Unsubscribe</a
                                              >
                                              -
                                              <a
                                                href="{{{unsubscribe_preferences}}}"
                                                target="_blank"
                                                class="Unsubscribe--unsubscribePreferences"
                                                style="color: #42ee99"
                                                >Unsubscribe Preferences</a
                                              >
                                            </p>
                                          </div>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="spacer"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="vKe4rfbECMPFgNz27Wg5EW"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    padding: 0px 0px 30px 0px;
                                                  "
                                                  role="module-content"
                                                  bgcolor="#000000"
                                                ></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table
                                            class="module"
                                            role="module"
                                            data-type="spacer"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            style="table-layout: fixed"
                                            data-muid="35xFa9abxGTBYt9yR9BeQ2"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    padding: 0px 0px 30px 0px;
                                                  "
                                                  role="module-content"
                                                  bgcolor="#000000"
                                                ></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]>
                                    </td>
                                  </tr>
                                </table>
                              </center>
                              <![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </body>
  </html>
  
    `;
};
