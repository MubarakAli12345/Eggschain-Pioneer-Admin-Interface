import React from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Icon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import { FuseAnimate } from "@fuse";
import clsx from "clsx";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(to right, " +
      theme.palette.primary.dark +
      " 0%, " +
      darken(theme.palette.primary.dark, 0.5) +
      " 100%)",
    color: theme.palette.primary.contrastText,
  },
}));

function TermsConditionsPage() {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.root,
        "flex flex-col flex-auto flex-shrink-0 p-24 md:flex-column md:p-0 termsConditionsBackground"
      )}
    >
      <div
        className="flex flex-row marginLeft mt-12 mr-12"
        style={{ marginLeft: "1.2rem" }}
      >
        <Link className="font-medium colorWhite align-end h2" to="/register">
          <Icon style={{ verticalAlign: "middle" }}>arrow_back</Icon>Go back to
          register
        </Link>
      </div>

      <Typography
        variant="h5"
        align="center"
        color="inherit"
        className="makx-w-512 mt-16 "
      >
        PRIVACY POLICY
      </Typography>

      <FuseAnimate animation="transition.slideUpIn" delay={300}>
        <Typography
          variant="p"
          color="inherit"
          className="mt-16 mb-16 mr-12 ml-12"
        >
          Your privacy is important to Eggschain Online, Inc. (“<b>Eggschain</b>
          ”). This Eggschain Privacy Policy (“<b>Privacy Policy</b>”) describes
          how Eggschain may collect, use, store, disclose, and process your
          personal information, through your access to or use of Eggschain
          products and services, including those at{" "}
          <a href="https://eggschain.com/" target="_blank">
            https://eggschain.com/
          </a>
          ,{" "}
          <a href="https://www.prealignment.com/" target="_blank">
            https://www.prealignment.com/
          </a>{" "}
          and related websites, mobile software applications, and other
          offerings (collectively, the “<b>Solutions</b>”). By using these
          Solutions, you signify your acceptance of this Privacy Policy. If you
          do not agree to this Privacy Policy, please do not use the Solutions.
          Eggschain may change this Privacy Policy from time to time by posting
          changes at this URL, with or without additional notification to you.
          Your continued use of the Solutions following the posting of such
          changes will be deemed your acceptance of those changes.
          <br></br>
          <br></br>
          Eggschain encourages you to read this Privacy Policy in its entirety,
          but here are a few key points of our privacy practices:
          <h5 className="mt-5 mb-5">Privacy Policy Applicability</h5>
          This Privacy Policy applies when you access the Solutions or share
          information with Eggschain and may be revised at any time. More
          <h5 className="mt-5 mb-5">Information We Collect from You</h5>
          We collect all information that you provide including information you
          provide via the Solutions, your devices (e.g., computers, smartphones,
          and tablets), telephone and email, as well as information we receive
          from partners and through the use of cookies and other such
          technologies. Eggschain may also use cookies and similar technologies
          to collect information about your activities on the Solutions. More
          <h5 className="mt-5 mb-5">How We Use Your Information</h5>
          We process your personal information only with your consent or as
          needed to provide you Solutions. We may also use your personal
          information to comply with legal obligations, operate our business
          (including advertising), protect the vital interests of you, our
          customers, or the public, or for other legitimate interests of
          Eggschain as further described below. More
          <h5 className="mt-5 mb-5">How We Share Your Information</h5>
          We share your information with our partners, service providers,
          contractors, agents and third-party vendors as they need it to fulfill
          Solutions or other requests you make of Eggschain. We may also share
          your information to comply with law or for other legitimate interests.
          More
          <h5 className="mt-5 mb-5">
            How We Store and Secure Your Information
          </h5>
          Eggschain may store your information in any country where Eggschain or
          its affiliates, partners, or providers operate facilities, and will
          retain your information as long as necessary for the purposes outlined
          in this Privacy Policy. Eggschain takes technological and
          organizational measures to protect your personal information against
          loss, theft, and unauthorized access, use, disclosure or modification.
          More
          <h5 className="mt-5 mb-5">Accessing and Updating Your Information</h5>
          You can access, get copies of, delete, change or correct your personal
          information, or request changes to our use of your personal
          information by using the contact information below. More
          <h5 className="mt-5 mb-5">Additional Privacy Information </h5>
          Eggschain’s databases are located in the United States and you consent
          to the transfer or your personal information from your location to the
          United States. The Solutions is not for use by children under the age
          of 13 years old. You may have additional rights under applicable law.
          If you have any questions about this privacy policy, please contact us
          via the information below. More
          <h5 className="mt-5 mb-5">Privacy Policy Applicability </h5>
          This Privacy Policy applies when you access the Solutions or share
          information with Eggschain, as indicated below. By using the
          Solutions, you consent to this Privacy Policy, which may be updated by
          us at any time. If you do not consent to this Privacy Policy for any
          reason, please do not use the Solutions or share your information with
          us. Please note that this Privacy Policy applies only to the
          Solutions, and not to any other third-party website linked to or from
          it, or any third-party website in which Eggschain content or
          functionality is embedded. We do not control the privacy policies or
          practices of others.
          <h5 className="mt-5 mb-5">Information We Collect from You </h5>
          In general, we receive and collect all information you provide via the
          Solutions, including through website input fields (including
          advertisements), phone, email (including email campaigns), web chat,
          or in other such ways. This includes personal information that can
          identify or relates to you, including but not limited to your first
          and last name, telephone number, IP, postal, and email addresses. You
          have the choice on what information to share and the services you want
          to engage. You can choose not to provide information to us, but in
          general some information about you is required in order for you access
          certain functionality of the Solutions, such as those mentioned above
          or for tracking your preferences, subscribing to a newsletter, or
          initiating other such actions. We also may periodically obtain both
          personal and non-personal information about you from affiliated
          entities, partners and other independent third-party sources and will
          add it to our database of information. For example, we may receive
          information about your interaction with advertisements on third party
          websites, including updated postal addresses and demographic
          information. We may use cookies, log files, web beacons, device
          identifiers, advertising identifiers and similar tracking
          technologies, including those from third-party service providers like
          Google Analytics, Google Tag Manager, HubSpot, and other cloud-based
          tools, to automatically collect your preferences, performance data and
          information about your web usage when you visit the Solutions. For
          example, we may collect your IP address, device and Internet service
          provider information, Web browser details and the address of any
          referring website. This may include collecting geolocation signals
          from your IP address or device settings to determine your location so
          that we may operate and personalize the Solutions for you, including
          to provide more relevant ads and search results. We may also collect
          information about your online activity, such as pages viewed and
          interactions with other users. You can learn more about targeted ads
          and your ability to opt out of receiving interest-based ads at
          optout.aboutads.info and www.networkadvertising.org/choices. The
          Solutions are not designed to recognize or respond to “do not track”
          signals received from browsers. You can control the information
          collected by such tracking technologies or be alerted when cookies are
          sent by adjusting the settings on your Internet browser or devices,
          but such adjustments may affect or disable certain functionality of
          the Solutions. When you access or use the Solutions using a mobile
          device, Eggschain may access, collect, monitor and/or remotely store
          one or more “device identifiers,” such as a universally unique
          identifier (UUID). Device identifiers are small data files or similar
          data structures stored on or associated with your device that uniquely
          identify your device. A device identifier may consist of data stored
          in connection with the device hardware, operating system or other
          software, or data sent to the device by Eggschain. A device identifier
          may convey information to Eggschain about how you browse and use the
          Solutions. A device identifier may remain persistently on your device
          to enhance your navigation within the Solutions. Some features of the
          Solutions may not function properly if use or availability of device
          identifiers is impaired or disabled.
          <h5 className="mt-5 mb-5">How We Use Your Information</h5>
          We process your personal information with your consent or as needed to
          provide you Solutions. We may also use your personal information to
          comply with legal obligations, operate our business, protect the vital
          interests of you, our customers, or the public, or for other
          legitimate interests of Eggschain as described in this Privacy Policy.
          <br></br>
          <br></br>
          More specifically, we may use your personal information to:
          <ul>
            <li>
              <b>Optimize and improve the Solutions</b> - We continually try to
              improve the Solutions based on the information and feedback we
              receive from you, including by optimizing the content on the
              Solutions.
            </li>
            <li>
              <b>Personalize the user experience </b> - We may use your
              information to measure engagement with the Solutions, and to
              understand how you and our other users interact with and use the
              Solutions and other resources we provided.
            </li>
            <li>
              <b>Improve customer service </b> - Your information helps us to
              more effectively develop the Solutions and respond to your support
              needs.
            </li>
            <li>
              <b>Process transactions</b> - We may use the information you
              provide about yourself to fulfill your requests and orders. We do
              not share this information with outside parties except to the
              extent necessary to provide the Solutions and related offerings.
            </li>
            <li>
              <b>To send periodic emails </b> - The email address you provide
              through our contact forms, will be used to send information and
              updates pertaining to the Solutions. It may also be used to
              respond to your inquiries or other requests. If you opt in to our
              mailing list, you may receive emails that include Eggschain news,
              updates, related product and service information, and marketing
              material. If at any time you would like to unsubscribe from
              receiving future emails, we include detailed unsubscribe
              instructions at the bottom of each email or you may contact us via
              the contact information below.
            </li>
          </ul>
          <h5 className="mt-5 mb-5">How We Share Your Information</h5>
          We share your information with our partners, service providers,
          contractors, agents and third party vendors as needed to fulfill
          Solutions. Please note that our partners may contact you as necessary
          to obtain additional information about you, facilitate any use of the
          Solutions, or respond to a request you submit.
          <br></br>
          Third-party vendors who provide product, services or functions on our
          behalf may include business analytics companies, customer service
          vendors, communications service vendors, marketing vendors, and
          security vendors. We may also authorize third-party vendors to collect
          information on our behalf, including as necessary to operate features
          of the Solutions or to facilitate the delivery of online advertising
          tailored to your interests. Third-party vendors have access to and may
          collect personal information only as needed to perform their
          functions, may only use personal information consistent with this
          Privacy Policy and other appropriate confidentiality and security
          measures, and are not permitted to share or use the information for
          any other purpose.
          <br></br>
          We also may share your information:
          <ul>
            <li>
              In response to subpoenas, court orders, or other legal process; to
              establish or exercise our legal rights; to defend against legal
              claims; or as otherwise required by law. In such cases we reserve
              the right to raise or waive any legal objection or right available
              to us.
            </li>
            <li>
              When we believe it is appropriate to investigate, prevent, or take
              action regarding illegal or suspected illegal activities; to
              protect and defend the rights, interests, or safety of our company
              or the Solutions, our customers, or others; or in connection with
              our Terms of Service and other agreements.
            </li>
            <li>
              In connection with a corporate transaction, such as a divestiture,
              merger, consolidation, or asset sale, or in the unlikely event of
              bankruptcy.
            </li>
          </ul>
          Other than as set out above, we will attempt to notify you when your
          personal information will be shared with third parties.
          <br />
          <br />
          <u>Personal Information You Post in Public Areas</u>. When you post a
          message in a Eggschain forum, chat room, review, or customer feedback,
          the information you post may be accessible to other users of the
          Service and the public. If you post personal information anywhere on
          the Solutions that is accessible to other users or the public, you are
          advised that such personal information can be read, collected, used,
          or disseminated by others and could be used to send you unsolicited
          information or otherwise. Accordingly, you assume full responsibility
          for posting such information and agree that Eggschain is not
          responsible in any way for personal information you choose to post in
          these public areas.
          <br />
          <br />
          <u>Non-Personal Information</u>. We may publish, share, distribute, or
          disclose non-personal information, which may include personal
          information that has been aggregated with information from other users
          or otherwise de-identified in a manner that does not allow such data
          about you to be separated from the aggregate data and identified as
          originating from you, to third parties, including Eggschain partners,
          sponsors, and advertisers. Such non-personal information may help
          Eggschain identify and analyze training, demographic, and
          psychographic trends and information, and report to third parties how
          many people saw, visited, or clicked on certain content, areas of the
          Solutions, ads, or other materials. We may also use such data for
          research purposes
          <br />
          <br />
          <h5 className="mt-5 mb-5">
            How We Store and Secure Your Information
          </h5>
          Personal information collected by Eggschain may be stored and
          processed in your region, in the United States, and in any other
          country where Eggschain or its affiliates, subsidiaries, or service
          providers operate facilities. Eggschain will retain your information
          as long as necessary for the purposes outlined in this Privacy Policy
          and for a commercially reasonable time thereafter for backup,
          archival, fraud prevention or detection or audit purposes, or as
          otherwise required by law.
          <br></br>
          Eggschain takes technological and organizational measures to protect
          your personal information against loss, theft, and unauthorized
          access, use, disclosure or modification.
          <br></br>
          Eggschain complies with applicable data protection laws, including
          applicable security breach notification requirements.
          <h5 className="mt-5 mb-5">Accessing and Updating Your Information</h5>
          To the extent provided by the law of your jurisdiction, you may (i)
          have the right to access certain personal information we maintain
          about you, (ii) request certain information regarding our disclosure
          of personal information to third parties for their direct marketing
          purposes, (iii) request that we update or correct inaccuracies in that
          information, (iv) object to our use of your personal information, (v)
          ask us to block or delete your personal information from our database,
          and (vi) request to download the information you have shared on the
          Solutions. You may make these requests and any other inquiries about
          this Privacy Policy by emailing feedback@eggschain.com. Any such
          requests are subject to the protection of other individuals’ rights
          and applicable law. Additionally, to help protect your privacy and
          maintain security, we may take steps to verify your identity before
          granting you access to the information. To the extent permitted by
          applicable law, a charge may apply before we provide you with a copy
          of any of your personal information that we maintain.
          <h5 className="mt-5 mb-5">Additional Privacy Information</h5>
          <u>Data Transfer</u>. Our databases are currently located in the
          United States. Eggschain makes no claim that its Solutions is
          appropriate or lawful for use or access outside the United States. If
          you access the Solutions from outside the United States, you are
          consenting to the transfer of your personal information from your
          location to the United States. You are solely responsible for
          complying with all local laws, rules and regulations regarding online
          conduct and access to the Solutions. By sending us your information,
          you further consent to its storage within the United States.
          <br></br>
          <br></br>
          <u>Collection of Data from Children</u>. The Solutions is not directed
          to children, and you may not use the Solutions or provide any personal
          information to Eggschain if you are under the age of 13 or if you are
          not old enough to consent to the processing of your personal
          information in your country.
          <br></br>
          <br></br>
          <u>Your California Privacy Rights</u>. California Civil Code Section
          1798.83 permits our customers who are California residents to request
          certain information regarding our disclosure of personal information
          to third parties for their direct marketing purposes. To make such a
          request, please e-mail us or write to us at the addresses below.
          <br></br>
          <br></br>
          <u>How to Contact Us</u>. You can e-mail us at privacy@eggschain.com
          or write to us at Eggschain, Inc., 1221 S. Congress Avenue, Suite 432
          Austin, TX 78704.
        </Typography>
      </FuseAnimate>
    </div>
  );
}

export default TermsConditionsPage;
