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
        EGGSCHAIN MASTER SUBSCRIPTION AGREEMENT
      </Typography>

      <FuseAnimate animation="transition.slideUpIn" delay={300}>
        <Typography
          variant="p"
          color="inherit"
          className="mt-16 mb-16 mr-12 ml-12"
        >
          Eggschain, Inc. (“Eggschain”) provides a suite of online and
          application-enabled solutions, including www.prealignment.com
          (collectively, the “Solutions”). Your use of the Solutions is subject
          to and governed by the terms and conditions in this Master
          Subscription Agreement (“Agreement”). Eggschain may, at its
          discretion, update this Agreement at any time. You can access and
          review the most current version of this Agreement at the URL for this
          page or by clicking on the “Master Subscription Agreement” link within
          the Solutions, or as otherwise made available by Eggschain.
          <br />
          <br />
          PLEASE REVIEW THIS AGREEMENT CAREFULLY. BY REGISTERING FOR AN ACCOUNT,
          SIGNING A DOCUMENT THAT IS SUBJECT TO THIS AGREEMENT, OR OTHERWISE
          ACCESSING OR USING THE SOLUTIONS, YOU AGREE TO BE BOUND BY THIS
          AGREEMENT, INCLUDING ANY UPDATES OR REVISIONS POSTED HERE OR OTHERWISE
          COMMUNICATED TO YOU. IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS
          OF THIS AGREEMENT, YOU MAY NOT ACCESS OR USE THE SOLUTIONS.
          <br />
          <br />
          THIS AGREEMENT REQUIRES FINAL AND BINDING ARBITRATION TO RESOLVE ALL
          DISPUTES AND CLAIMS ARISING OUT OF OR RELATING IN ANY WAY TO THIS
          AGREEMENT, OR YOUR ACCESS TO OR USE OF THE SOLUTIONS, INCLUDING THE
          VALIDITY, APPLICABILITY OR INTERPRETATION OF THIS AGREEMENT, AND YOU
          AGREE THAT ALL SUCH DISPUTES AND CLAIMS WILL BE RESOLVED ONLY ON AN
          INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED OR REPRESENTATIVE
          ACTION, ARBITRATION OR OTHER SIMILAR PROCESS. PLEASE REVIEW SECTION 18
          CAREFULLY TO UNDERSTAND YOUR RIGHTS AND OBLIGATIONS WITH RESPECT TO
          THE RESOLUTION OF ANY SUCH DISPUTE OR CLAIM.
          <br />
          <br />
          You represent and warrant that you: (a) are of legal age to form a
          binding contract; (b) have the right, authority, and capacity to agree
          to and abide by this Agreement; and (c) are not a person barred from
          using the Solutions under the laws of any applicable jurisdiction. THE
          SOLUTIONS ARE NOT INTENDED FOR USERS UNDER THE AGE OF 13, AND SUCH
          USERS ARE EXPRESSLY PROHIBITED FROM SUBMITTING ANY PERSONAL DATA OR
          USING ANY ASPECT OF THE SOLUTIONS, AND BY TAKING SUCH ACTIONS YOU
          AGREE, REPRESENT, AND WARRANT THAT YOU ARE 13 YEARS OF AGE OR OLDER.
          <br />
          <br />
          <h5 className="mt-5 mb-5"> 1. The Solutions.</h5>
          <b>(a) Provision and License to Solutions. </b> Subject to and
          conditioned on the terms and conditions of this Agreement, during the
          Term, Eggschain will make the Solutions available to you, and hereby
          grants you a personal, non-exclusive, non-transferable,
          non-sublicensable, revocable license solely to use the Solutions only
          for your non-commercial use to track frozen eggs, embryos, sperm and
          other genetic materials. Your access to and use of the Solutions must
          further comply in all material respects with any usage guidelines
          posted by Eggschain.
          <br />
          <br />
          <b>(b) Mobile Apps. </b> Eggschain may make available mobile software
          applications for access to and use of certain components of the
          Solutions (collectively, “Mobile Apps”). Your access to and use of
          Mobile Apps is subject to and governed by this Agreement. If any
          Mobile App is downloaded by you from the iTunes App Store (each, an
          “iOS Mobile App”), your use of such iOS Mobile App is further subject
          to your compliance in all material respects with the terms and
          conditions of the Usage Rules set forth in the iTunes App Store Terms
          of Service. This Agreement is between you and Eggschain only, and not
          with Apple Inc. (“Apple”) or any other app store provider, and Apple
          is not responsible for iOS Mobile Apps and the contents thereof;
          however, Apple and Apple’s subsidiaries are third-party beneficiaries
          of this Agreement with respect to iOS Mobile Apps.
          <br />
          <br />
          <h5 className="mt-5 mb-5">2. Proprietary Rights.</h5>
          (a) The Solutions provided to you hereunder or available to you
          through the Solutions are licensed, not sold, and Eggschain retains
          and reserves all rights not expressly granted in this Agreement. You
          acknowledge and agree that, as between you and Eggschain, Eggschain
          and its licensors owns all rights, title and interest (including all
          intellectual property rights) in the Solutions and all other materials
          within the Solutions. The Solutions are protected by U.S. and
          international copyright and other intellectual property laws and
          treaties. Eggschain reserves all rights not expressly granted to you
          in this Agreement. Eggschain also owns and retains ownership of all
          right, title, and interest in and to: (i) all deliverables and other
          work product created as a result of the Solutions, (ii) all ideas,
          suggestions, or feedback relating to the Solutions (“Feedback”); (iii)
          all modifications or derivative works to any of the foregoing,
          including the Solutions; and (v) all intellectual property rights
          embodied within any of the foregoing, including the Solutions. You
          hereby irrevocably assign and agree to assign to Eggschain all of your
          right, title, and interest in and to all Feedback.
          <br />
          <br />
          (b) You may not share your account or password with anyone. You are
          fully responsible for all activities that occur under your account.
          You agree to notify Eggschain immediately of any unauthorized use of
          your account or password or any other similar breach of security. If
          your account remains inactive for three months or longer, Eggschain
          reserves the right to suspend or terminate your account, with or
          without notice to you, and delete your content all without liability.
          <br />
          <br />
          <h5 className="mt-5 mb-5">3. User Conduct and Restrictions</h5>
          <b>(a) In your use of the Solutions, you will not: </b>
          <br />
          (i) use, reproduce, modify, adapt, create derivative works from,
          sublicense, publicly perform, publicly display, distribute, sell,
          lease, rent, make, have made, assign, pledge, transfer or otherwise
          grant rights to the Solutions, except as expressly permitted under
          this Agreement;
          <br />
          (ii) reverse engineer, disassemble, decompile, translate, or otherwise
          attempt to derive trade secrets, know how, or the source code,
          architectural framework, or data records, within or associated with
          the Solutions;
          <br />
          (iii) interfere with or disrupt the integrity or performance of the
          Solutions, including by disrupting the ability of any other person to
          use or enjoy the Solutions;
          <br />
          (iv) provide use of the Solutions on a service bureau, rental or
          managed services basis, provide or permit other individuals or
          entities to create Internet "links" to the Solutions or "frame" or
          "mirror" the Solutions on any other server, or wireless or
          Internet-based device;
          <br />
          (v) access the Solutions for the purpose of developing, marketing,
          selling or distributing any product or service that competes with or
          includes features substantially similar to the Solutions; <br />
          (vi) violate any applicable local, state, provincial, federal or
          international law or regulation, or use the Solutions for any illegal,
          unauthorized or otherwise improper purposes, including to store or
          transmit malicious code, or to store or transmit material in violation
          of third-party privacy rights; <br />
          (vii) remove or obscure any proprietary notice that appears within the
          Solutions; <br />
          (viii) impersonate any person or entity, including Eggschain
          personnel, or falsely state or otherwise misrepresent your affiliation
          with Eggschain, or any other entity or person; <br />
          (ix) forge headers or otherwise manipulate identifiers in order to
          disguise the origin of any content transmitted through the Solutions;
          <br />
          (x) take any action that imposes an unreasonable or disproportionately
          heavy load on the Solutions or its infrastructure; or <br />
          (xi) use spiders, crawlers, robots, scrapers, automated tools or any
          other similar means to access the Solutions; or download, reproduce,
          or archive any substantial portion of the Solutions.
          <br />
          <br />
          <b>
            (b) You will not upload, post, email, store, transmit, or otherwise
            make available any content that:{" "}
          </b>
          <br />
          (i) is illegal, harmful, threatening, abusive, harassing, tortious,
          defamatory, vulgar, obscene, libelous, invasive of another's privacy,
          hateful, or otherwise objectionable;
          <br /> (ii) may not be made available under any law or under
          contractual or fiduciary relationships (such as confidential or
          proprietary information learned as part of an employment relationship
          or under a non-disclosure agreement); <br />
          (iii) infringes any patent, trademark, trade secret, copyright, or
          other proprietary right of any party; <br />
          (iv) consists of unsolicited or unauthorized advertising, promotional
          materials, junk mail, spam, chain letters, pyramid schemes, commercial
          electronic messages, or any other form of solicitation; <br />
          (iv) contains software viruses or any other code, files or programs
          designed to interrupt, destroy or limit the functionality of any
          software or hardware; <br />
          (v) contains infringing, libelous, or otherwise unlawful or tortious
          material; or <br />
          (vi) consists of information that you know or have reason to know is
          false or inaccurate.
          <br />
          <br />
          <b>(c) Trademarks. </b>You may not use the Eggschain names, brands,
          trademarks, service marks and logos that Eggschain makes available on
          the Solutions (“Marks”). Eggschain claims trademark protection over
          all such Marks and you will not use the Marks except as expressly
          authorized herein. You will not remove or alter the Marks or any
          proprietary notices on the Solutions. The Marks may not be included in
          or as part of any registered corporate name, any other logo, or
          service or product name. You may not create any derivative works of
          the Marks or use the Marks in a manner that creates or reasonably
          implies an inaccurate sense of endorsement, sponsorship, or
          association with Eggschain. You will not otherwise use business names
          and/or logos in a manner that can mislead, confuse, or deceive any
          third party. All use of the Marks and all goodwill arising out of such
          use, will inure to Eggschain’s benefit.
          <br />
          <br />
          <b>(d) No Waiver. </b> Eggschain’s failure to enforce any of these
          restrictions or guidelines shall not act as a waiver for any future
          enforcement, will not be considered a breach of this Agreement by
          Eggschain, and does not create a private right of action for any other
          party.
          <br />
          <br />
          <h5 className="mt-5 mb-5">4. Privacy Policy. </h5> In addition to this
          Agreement, the Eggschain Privacy Policy at
          https://eggschain.com/privacy (“Privacy Policy”) applies to how
          Eggschain may process information provided as part of the Solutions.
          You acknowledge and agree that by accessing or using the Solutions,
          Eggschain may receive certain information about you, including
          personal data, as set forth in the Privacy Policy, and Eggschain may
          collect, use, disclose, store, share, and process such personal data
          in accordance with such Privacy Policy.
          <br />
          <br />
          <h5 className="mt-5 mb-5">5. Fees. </h5>
          <b>(a) Invoices & Payment.</b> All fees for the Solutions are based on
          access rights acquired and not actual usage, and will be
          electronically invoiced to, and remitted from, the you in the United
          States. All fees shall be due and payable within thirty (30) days of
          invoice date, except fees subject to a reasonable and good faith
          dispute. Eggschain shall email invoices to you within two business
          days of the date of the invoice. You shall provide Eggschain with
          complete and accurate billing contact information including a valid
          email address. Upon Eggschain’s request, you will make payments via
          credit card or electronic bank transfer. All payments are
          non-refundable.
          <br />
          <br />
          <b>(b) Suspension for Non-Payment.</b> Except for fees subject to a
          reasonable and good faith dispute, if a payment is more than thirty
          (30) days past due, Eggschain may suspend the Solutions, without
          liability to you, until such amounts are paid in full.
          <br />
          <br />
          <b>(c) Taxes.</b> Fees invoiced pursuant to this Agreement do not
          include, and may not be reduced to account for, any taxes, which may
          include local, state, provincial, federal or foreign taxes,
          withholding taxes, levies, duties or similar governmental assessments
          of any nature, including, but not limited to, value-added taxes,
          excise, use, goods and services taxes, consumption taxes or similar
          taxes (collectively “Taxes”). You are responsible for paying all Taxes
          imposed on the Solutions or any other services provided under this
          Agreement. If Eggschain has a legal obligation to pay or collect Taxes
          for which you are responsible under this Agreement, the appropriate
          amount shall be computed based on the address listed under your
          account, and will be invoiced to and paid by you, unless you provide
          Eggschain with a valid tax exemption certificate authorized by the
          appropriate taxing authority.
          <br />
          <br />
          <h5 className="mt-5 mb-5">6. Your Content. </h5> You may input or
          upload data, text, images, photos, videos, sounds, links, works of
          authorship, or other materials to the Solutions (collectively, "Your
          Content"). Eggschain does not claim ownership of Your Content. By
          posting or sharing the Your Content, you hereby grant to Eggschain the
          limited rights that are reasonably necessary for Eggschain to provide
          the Solutions to you. You represent and warrant that: (i) you own Your
          Content or otherwise have the right, and proper consents and
          approvals, to grant the license set forth in this section, and (ii)
          transmitting Your Content on or through the Solutions does not violate
          the privacy rights, publicity rights, copyrights, trademark rights,
          contract rights or any other rights of any person or entity.
          Eggschain’s provision of the Solutions to you is specifically
          conditioned upon you obtaining such consents and approvals. You shall
          only collect, process, use, store, disclose and transfer Your Content
          in compliance with all applicable third-party terms, privacy policies
          and other terms between you and the applicable data subjects. You
          acknowledge that Eggschain does not have any control over Your
          Content, even when it passes through Eggschain’s systems and networks
          through the Solutions, and is not responsible for monitoring Your
          Content. Eggschain may, but does not have any obligation to, remove
          any of the Your Content from the Solutions in our sole discretion,
          including if Eggschain determines that it may violate another person’s
          intellectual property rights, this Agreement, any applicable
          third-party terms, or applicable law. Eggschain may publish, share,
          distribute, or disclose Your Content, provided it has been aggregated
          with information from other users or otherwise de-identified in a
          manner that does not allow Your Content to be separated from the
          aggregate data and identified as originating from you or the
          applicable data subject (“Aggregate Data”). you acknowledges and
          agrees that Eggschain may (i) use such Aggregate Data to improve the
          Solutions, develop new services, understand industry trends, create
          white papers, reports, or databases summarizing the foregoing, and
          generally for any legitimate purpose related to Eggschain’s business,
          (ii) use and share such data for medical and other research purposes,
          (iii) share Aggregate Data with third parties or publish any reports,
          white papers or other summaries incorporating Aggregate Data, (iv) use
          Aggregate Data to investigate and help address and prevent actual or
          potential unlawful activity, and (v) disclose Aggregate Data upon the
          request of a government agency, law enforcement agency, court or as
          otherwise required by law. It is your sole responsibility to back-up
          Your Content. You acknowledge and agree that after termination of this
          Agreement, you may not have access to the Your Content via the
          Solutions.
          <br />
          <br />
          <h5 className="mt-5 mb-5">7. Data Privacy Laws </h5>You acknowledge
          and agree that the Solutions store data (including personal data) on
          servers in the U.S. or any other country in which Eggschain or its
          affiliates, subsidiaries, agents or contractors maintain facilities.
          You agree not to provide Eggschain with any End User Data or other
          data, without Eggschain’s prior written consent, that: (i) could be
          deemed “sensitive personal data” under the EU Data Protection
          Directive 95/46/EC and/or the General Data Protection Regulation
          (GDPR), (ii) is subject to the laws of any jurisdiction, or (iii)
          subject to the requirements of any industry or standards setting
          organization, in each case that would subject such data to heightened
          restrictions related to the storage, security, transmission and
          processing of such data (including without limitation data subject to
          the requirements of the Health Insurance Portability and
          Accountability Act (HIPAA), the PCI Security Standards Council
          (PCI-DSS) or the Children’s Online Privacy and Protection Act
          (COPPA)). You shall comply with all laws, rules, regulations,
          requirements and standards applicable to you, including without
          limitation all obligation under any applicable data privacy laws,
          rules, regulations, requirements or standards. In addition, you shall
          maintain written security management policies and procedures to
          prevent, detect, contain, and correct violations of measures taken to
          protect the confidentiality, integrity, availability, or security of
          Your Content.
          <br />
          <br />
          <h5 className="mt-5 mb-5">8. Term and Termination. </h5>
          <br />
          <b>(a) Term.</b> This Agreement is effective as of the date designated
          on the document that is subject to this Agreement, or otherwise upon
          the earlier date that you first register an account or access the
          Solutions (“Effective Date”), and continues until your subscription to
          the Solutions has expired or is terminated (the “Term”).
          <br />
          <br />
          <b>(b) Termination.</b> Either party has the right to terminate this
          Agreement at any time for any reason, or no reason. Eggschain may also
          suspend your access to or use of the Solutions in the event of
          nonpayment or other breach until such time is payment in full has been
          made or such other breach has been fully cured. Either party may also
          terminate this Agreement upon providing written notice to the other
          party if: (i) the other party becomes the subject of a voluntary
          petition in bankruptcy or any voluntary proceeding relating to
          insolvency, receivership, liquidation, or composition for the benefit
          of creditors; or (ii) the other party becomes the subject of an
          involuntary petition in bankruptcy or any involuntary proceeding
          relating to insolvency, receivership, liquidation, or composition for
          the benefit of creditors, if such petition or proceeding is not
          dismissed within sixty (60) days of filing. In addition to the right
          to terminate this Agreement, each Party reserves all rights and
          remedies available to that Party under law or equity, including the
          right to seek damages and injunctive relief for breach or threatened
          breach of this Agreement by the other Party. Eggschain will not be
          liable to you for any damages resulting solely from termination of
          this Agreement as permitted under this Agreement.
          <br />
          <br />
          <b>(c) Effect of Termination.</b> Upon termination or expiration of
          this Agreement, (i) all licenses and rights granted hereunder shall
          immediately terminate, (ii) you will immediately cease all use of and
          all access to the Solutions, and (iii) each party shall immediately
          return the Confidential Information of the Disclosing Party. All other
          rights and obligations shall be of no further force or effect. Upon
          termination of this Agreement or deletion of any of your accounts, you
          will not have access to any of Your Content or other data associated
          with such accounts. Sections 2 – 6, 8, 9, 10, 11(c), 12, 17, 18 and 19
          shall survive any
          <br />
          <br />
          <h5 className="mt-5 mb-5">9. Indemnification.</h5>
          <b>(a) Claims Against You.</b> Eggschain will defend, at its own
          expense, and hold you harmless against any claim, suit or action
          brought against you by a third party to the extent that such claim,
          suit or action arises from an allegation that the Solutions, when used
          as expressly permitted by this Agreement, infringes the intellectual
          property rights of such third party (“Your Claim”), and Eggschain will
          indemnify from all liability incurred by you to the extent arising
          from Your Claim. If Eggschain receives prompt notice of a Your Claim
          that, in Eggschain's reasonable opinion, is likely to result in an
          adverse ruling preventing further use of the Solutions, then Eggschain
          may (i) obtain a right for you to continue using the Solutions at
          issue; (ii) modify such Solutions to make it non-infringing; (ii)
          replace such Solutions with a non-infringing version; or (d) provide a
          reasonable depreciated or pro rata refund of amounts pre-paid for the
          allegedly infringing Solutions.
          <br />
          <br />
          <b>(b) Exceptions to Your Claim.</b> Notwithstanding the foregoing,
          Eggschain will have no obligation under this section or otherwise with
          respect to any infringement claim based upon: (i) any use of the
          Solutions not expressly permitted under this Agreement; (ii) any use
          of the Solutions in combination with products, equipment, software, or
          data not made available by Eggschain if such infringement would have
          been avoided without the combination with such other products,
          equipment, software or data; or (iii) any modification of the
          Solutions by any person other than Eggschain or its authorized agents
          or subcontractors (collectively, “Excluded Claims”). Eggschain will
          have no obligation under this section or otherwise with respect to any
          claim based upon the use by you of any Your Content accessed through
          the Solutions to the extent such claim is not based on the Solutions
          itself. This section states Eggschain’s entire liability and your sole
          and exclusive remedy for all third party claims.
          <br />
          <br />
          <b>(c) Claims Against Eggschain.</b> You will defend, at your own
          expense, and hold Eggschain harmless against any claim, suit or action
          against Eggschain brought by a third party to the extent that such
          claim, suit or action arises from (i) your failure to comply with or
          violation of any applicable law or regulation; (ii) your infringement
          of any third party’s intellectual property rights; (iii) Excluded
          Claims; or (iv) Your Content or any of your products or services
          (each, a “Eggschain Claim”), and you will indemnify Eggschain from all
          liability incurred by Eggschain that is specifically attributable to
          such Eggschain Claim or those costs and damages agreed to in a
          monetary settlement of such Eggschain Claim.
          <br />
          <br />
          <b>(d) Procedure.</b> The foregoing obligations are conditioned on the
          party seeking indemnification: (i) promptly notifying the other party
          in writing of such claim; (ii) giving the other party sole control of
          the defense thereof and any related settlement negotiations; and (iii)
          cooperating and, at other party’s request and expense, assisting in
          such defense. Neither party may make any public announcement of any
          claim, defense or settlement without the other party’s prior written
          approval.
          <br />
          <br />
          <b>(e) Resolution of Claims.</b> The indemnifying party may not
          settle, compromise or resolve a claim without the consent of the
          indemnified party, if such settlement, compromise or resolution (i)
          causes or requires an admission or finding of guilt against the
          indemnified party; (ii) imposes any monetary damages against the
          indemnified party; or (iii) does not fully release the indemnified
          party from liability with respect to the claim.
          <br />
          <br />
          <h5 className="mt-5 mb-5">10. Confidentiality.</h5>
          <b>(a) Nondisclosure.</b> “Confidential Information” means the
          proprietary information provided or made available by one party (the
          “Disclosing Party”) to the other party (the “Receiving Party”), which
          is marked “confidential” or “proprietary” at the time of disclosure by
          the Disclosing Party, or by its nature or content would reasonably be
          considered confidential under the circumstances by the Receiving
          Party, including without limitation, information (tangible or
          intangible) regarding a party’s technology, designs, techniques,
          research, know-how, specifications, product plans, pricing, customer
          information, user data, current or future strategic information,
          current or future business plans, policies or practices, employee
          information, and other business and technical information.
          Confidential Information of Eggschain includes the Solutions. The
          terms of this Agreement shall be considered Confidential Information.
          Receiving Party agrees that it will not (i) use the Disclosing Party’s
          Confidential Information in any way, for its own benefit or the
          benefit of any third party, except as expressly permitted by, or as
          required to implement, this Agreement, or (ii) disclose to any third
          party (except as expressly permitted by this Agreement, required by
          law or to such party’s attorneys, accountants and other advisors as
          reasonably necessary or contractors that are bound by written
          agreements at least as restrictive as this Agreement) any Confidential
          Information of the Disclosing Party. Receiving Party will secure and
          protect the confidentiality of the Confidential Information of the
          Disclosing Party using precautions that are at least as stringent as
          it takes to protect its own Confidential Information, but in no case
          less than reasonable precautions.
          <br />
          <br />
          <b>(b) Exceptions.</b> Receiving Party will have no obligations of
          confidentiality under Section 9.1 for information that is proven by
          Receiving Party (i) to have been known to Receiving Party prior to its
          receipt from Disclosing Party from a source other than one having an
          obligation of confidentiality to Disclosing Party; (ii) to have become
          publicly known, except through a breach of this Agreement by Receiving
          Party; or (iii) to have been entirely independently developed by
          Receiving Party without use of or reference to the Confidential
          Information of Disclosing Party. Receiving Party may disclose
          Confidential Information pursuant to the requirements of a
          governmental agency or applicable law, and, to the extent permitted,
          it will give Disclosing Party reasonable prior written notice
          sufficient to permit Disclosing Party to contest such disclosure.
          <br />
          <br />
          <b>(c) Publicity.</b> You will not issue any press release or
          otherwise make any public announcement with respect to this Agreement,
          any of the activities contemplated hereby, the Solutions, or
          concerning Eggschain without Eggschain’s prior written consent.
          <br />
          <br />
          <h5 className="mt-5 mb-5">11. Warranties and Disclaimers.</h5>
          <b>(a) Mutual Representations and Warranties.</b> Each party
          represents and warrants that it has full right, power, and authority
          to enter into this Agreement and to perform its obligations and duties
          under this Agreement, and that the performance of such obligations and
          duties does not conflict with or result in a breach of any other
          agreement of such party or any judgment, order, or decree by which
          such party is bound.
          <br />
          <br />
          <b>(b) Disclaimer of Third Party Actions.</b> You acknowledge that
          Eggschain does not and cannot control the flow of data to or from the
          Solutions or within any portion of the Internet. Such flow depends in
          large part on the performance of Internet services provided or
          controlled by third parties. At times, actions or omissions of such
          third parties can impair or disrupt your connections to the Solutions
          and Internet (or portions thereof). Although Eggschain will use
          commercially reasonable efforts to take actions it deems appropriate
          to remedy and avoid such events with respect to your access to the
          Solutions, Eggschain does not guarantee or represent that such events
          will not occur. Accordingly, Eggschain disclaims any and all liability
          resulting from, or related to, such events.
          <br />
          <br />
          <b>(c) Disclaimer.</b> EXCEPT FOR THE EXPRESS WARRANTIES SET FORTH IN
          THIS SECTION 18, THE SOLUTIONS ARE PROVIDED SOLELY “AS IS”, “AS
          AVAILABLE” WITH ALL FAULTS, AND YOUR USE OF SOLUTIONS IS AT YOUR SOLE
          RISK. EGGSCHAIN DOES NOT MAKE, AND HEREBY DISCLAIMS, ANY AND ALL OTHER
          EXPRESS AND IMPLIED WARRANTIES, INCLUDING ALL WARRANTIES OF
          MERCHANTABILITY, QUALITY, PERFORMANCE, FITNESS FOR A PARTICULAR
          PURPOSE, NON-INFRINGEMENT, TITLE, AND ANY WARRANTIES ARISING FROM
          COURSE OF DEALING, USAGE, OR TRADE PRACTICE, IN CONNECTION WITH THIS
          AGREEMENT. EGGSCHAIN DOES NOT WARRANT THAT THE SOLUTIONS OR ANY OTHER
          PRODUCT OR SERVICE PROVIDED HEREUNDER WILL BE UNINTERRUPTED,
          ERROR-FREE, VIRUS-FREE OR SECURE. THIS DISCLAIMER OF WARRANTY MAY NOT
          BE VALID IN SOME JURISDICTIONS AND YOU MAY HAVE WARRANTY RIGHTS UNDER
          LAW WHICH MAY NOT BE WAIVED OR DISCLAIMED. ANY SUCH WARRANTY EXTENDS
          ONLY FOR THIRTY (30) DAYS FROM THE EFFECTIVE DATE OF THIS AGREEMENT
          (UNLESS SUCH LAW PROVIDES OTHERWISE).
          <br />
          <br />
          <h5 className="mt-5 mb-5">12. Limitation of Liability. </h5>
          <b>(a) Limits and Waivers.</b> IN NO EVENT WILL EITHER PARTY BE LIABLE
          TO THE OTHER PARTY FOR ANY SPECIAL, INCIDENTAL, PUNITIVE, INDIRECT,
          EXEMPLARY, OR CONSEQUENTIAL DAMAGES, OR FOR LOST REVENUE, LOST
          PROFITS, COST OF REPLACEMENT OF GOODS OR SERVICES, LOSS OF TECHNOLOGY,
          GOODWILL, RIGHTS OR SERVICES, LOSS OF DATA OR INTERRUPTION OR LOSS OF
          USE OF SERVICES IN CONNECTION WITH THIS AGREEMENT. NOTWITHSTANDING
          ANYTHING TO THE CONTRARY IN THIS AGREEMENT, EGGSCHAIN’S TOTAL
          LIABILITY TO YOU FOR ANY AND ALL CLAIMS IN CONNECTION WITH THIS
          AGREEMENT SHALL IN NO EVENT EXCEED THE AMOUNT PAID BY YOU TO EGGSCHAIN
          UNDER THIS AGREEMENT FOR THE TWELVE (12) MONTH PERIOD PRIOR TO THE
          EVENT GIVING RISE TO SUCH CLAIM(S).
          <br />
          <br />
          <b>(b) Exclusions.</b> Section 12(a) will not apply to (i) breaches of
          confidentiality obligations, or (ii) infringement or misappropriation
          of the other party’s intellectual property rights, including without
          limitation, breaches by you of Section 3.
          <br />
          <br />
          <b>(c) No Content Liability.</b> Eggschain will have no liability
          whatsoever with regard to the Your Data
          <br />
          <br />
          <b>(d) Applicability.</b> THE FOREGOING LIMITATIONS, EXCLUSIONS AND
          DISCLAIMERS SHALL APPLY REGARDLESS OF WHETHER SUCH LIABILITY ARISES
          FROM ANY CLAIM BASED UPON CONTRACT, WARRANTY, TORT (INCLUDING
          NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, AND WHETHER OR NOT THE
          PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS OR DAMAGE.
          INSOFAR AS APPLICABLE LAW PROHIBITS ANY LIMITATION ON LIABILITY
          HEREIN, THE PARTIES AGREE THAT SUCH LIMITATION WILL BE AUTOMATICALLY
          MODIFIED, BUT ONLY TO THE EXTENT SO AS TO MAKE THE LIMITATION
          COMPLIANT WITH APPLICABLE LAW. THE PARTIES AGREE THAT THE LIMITATIONS
          ON LIABILITIES SET FORTH HEREIN ARE AGREED ALLOCATIONS OF RISK AND
          SUCH LIMITATIONS WILL APPLY NOTWITHSTANDING THE FAILURE OF ESSENTIAL
          PURPOSE OF ANY LIMITED REMEDY.
          <br />
          <br />
          <h5 className="mt-5 mb-5">13. Compliance with Law.</h5> To the extent
          you choose to use the Solutions, you agree to comply with all
          applicable laws, including but not limited to applicable local laws.
          You may not use or otherwise export or re-export the Solutions or any
          data therein except as authorized by United States law and the laws of
          the jurisdiction in which the Solutions were accessed.
          <br />
          <br />
          <h5 className="mt-5 mb-5">14. Government Users.</h5> If you are a
          branch or agency of the United States Government or a contractor
          thereto, the following provision applies. The Solutions are comprised
          of “commercial computer software” and “commercial computer software
          documentation” as such terms are used in 48 C.F.R. 12.212 (Sept. 1995)
          and are provided to the Government (i) for acquisition by or on behalf
          of civilian agencies, consistent with the policies set forth in 48
          C.F.R. 12.212; or (ii) for acquisition on behalf of the department of
          defense consistent with the policies set for the in 48 C.F.R.
          227.7202-1 (Aug. 1995) and 227.7202-3 (Aug. 1995).
          <br />
          <br />
          <h5 className="mt-5 mb-5">15. Third-Party Solutions.</h5> You
          acknowledge that (i) the Solutions may contain other software or
          components that are either owned by a third party or in the public
          domain or generally available, and (ii) Eggschain has no proprietary
          interest in such software or components (collectively and each, the
          “Third-Party Solutions”), and as such, cannot grant you a license to
          use such Third-Party Solutions.
          <br />
          <br />
          <h5 className="mt-5 mb-5">16. Commitments.</h5> Eggschain has made no
          commitments or promises orally or in writing with respect to delivery
          or any future software features or functions. In relation to any
          future software features or functions, all presentations, request for
          proposal responses, and/or product roadmap documents, information or
          discussions, either prior to or following the Effective Date, are for
          informational purposes only, and Eggschain shall have no obligation to
          provide any future releases or upgrades or any features, enhancements,
          or functions unless specifically agreed to in writing by both parties.
          Unless otherwise specifically documented in a Statement of Work, you
          acknowledge that no purchasing decisions are based on any future
          software features or functionality.
          <br />
          <br />
          <h5 className="mt-5 mb-5">17. Governing Law.</h5> This Agreement shall
          be governed by and construed and enforced in accordance with the
          United States Federal Arbitration Act, other applicable federal laws
          and the laws of the State of Texas, without regard to conflict of laws
          principles. The parties agree that neither the United Nations
          Convention on Contracts for the International Sale of Goods, nor the
          Uniform Computer Information Transaction Act (UCITA) shall apply to
          this Agreement, regardless of the states in which the parties do
          business or are incorporated.
          <br />
          <br />
          <h5 className="mt-5 mb-5">
            18. Binding Arbitration and Class Action Waiver.
          </h5>
          <b>(a) Arbitration.</b> ALL CLAIMS (AS DEFINED ABOVE) SHALL BE
          RESOLVED BY FINAL AND BINDING ARBITRATION RATHER THAN IN COURT, EXCEPT
          THAT YOU MAY ASSERT CLAIMS IN SMALL CLAIMS COURT (DEFINED FOR THE
          PURPOSES OF THIS Agreement AS A COURT OF LIMITED JURISDICTION THAT MAY
          ONLY HEAR CLAIMS NOT EXCEEDING $5,000) IF YOUR CLAIMS ARE WITHIN THE
          COURT’S JURISDICTION. THERE IS NO JUDGE OR JURY IN ARBITRATION, AND
          COURT REVIEW OF AN ARBITRATION AWARD IS LIMITED.
          <br />
          <br />
          <b>(b) Venue.</b> The arbitration shall be conducted by the American
          Arbitration Association (AAA) under its then-applicable Commercial
          Arbitration Rules or, as appropriate, its Consumer Arbitration Rules.
          The AAA’s rules are available at http://www.adr.org/. Payment of all
          filing, administration and arbitrator fees shall be governed by the
          AAA’s rules. The arbitration shall be conducted in the English
          language by a single independent and neutral arbitrator. For any
          hearing conducted in person as part of the arbitration, you agree that
          such hearing shall be conducted in Austin, Texas or, if the Consumer
          Arbitration Rules apply, another location reasonably convenient to
          both parties with due consideration of their ability to travel and
          other pertinent circumstances, as determined by the arbitrator. The
          decision of the arbitrator shall be final and binding. Judgment on the
          arbitral award may be entered in any court of competent jurisdiction.
          <br />
          <br />
          <b>(c) Class Action Waiver.</b> WE EACH AGREE THAT ALL CLAIMS SHALL BE
          RESOLVED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED
          OR REPRESENTATIVE ACTION OR OTHER SIMILAR PROCESS (INCLUDING
          ARBITRATION). IF FOR ANY REASON A CLAIM PROCEEDS IN COURT RATHER THAN
          IN ARBITRATION, WE EACH WAIVE ANY RIGHT TO A JURY TRIAL AND AGREE THAT
          SUCH CLAIM SHALL BE BROUGHT ONLY IN A COURT OF COMPETENT JURISDICTION
          IN AUSTIN, TEXAS. YOU HEREBY SUBMIT TO THE PERSONAL JURISDICTION AND
          VENUE OF SUCH COURTS AND WAIVE ANY OBJECTION ON THE GROUNDS OF VENUE,
          FORUM NON-CONVENIENS OR ANY SIMILAR GROUNDS WITH RESPECT TO ANY SUCH
          CLAIM.
          <br />
          <br />
          <b>(d) Injunctive Relief.</b> Notwithstanding anything to the
          contrary, you and Eggschain may seek injunctive relief and any other
          equitable remedies from any court of competent jurisdiction to protect
          its Confidential information or intellectual property rights, whether
          in aid of, pending, or independently of the resolution of any dispute
          pursuant to the arbitration procedures set forth in this Section 13.
          <br />
          <br />
          <b>(e) Revisions.</b> If Eggschain implements any material change to
          this section, such change shall not apply to any claim for which you
          provided written notice to Eggschain before the implementation of the
          change.
          <br />
          <br />
          <h5 className="mt-5 mb-5">19. Miscellaneous.</h5> This Agreement
          constitutes the entire agreement between you and Eggschain concerning
          your access to and use of the Solutions. It supersedes all prior and
          contemporaneous oral or written negotiations and agreements between
          you and Eggschain with respect to such subject matter. In the event of
          any conflict between or among this Agreement and any agreement that
          incorporates this Agreement by reference and executed by both parties,
          the terms and conditions of such incorporating agreement shall take
          precedence and govern over this Agreement. This Agreement may not be
          amended by you except in a writing executed by you and an authorized
          representative of Eggschain. Except as otherwise expressly provided in
          this Agreement, there shall be no third-party beneficiaries to this
          Agreement. For the purposes of this Agreement, the words “such as,”
          “include,” “includes” and “including” shall be deemed to be followed
          by the words “without limitation.” You may not assign or delegate any
          right or obligation under this Agreement without the prior written
          consent of Eggschain. The failure of Eggschain to exercise or enforce
          any right or provision of this Agreement shall not constitute a waiver
          of such right or provision. If any provision of this Agreement is held
          to be invalid or unenforceable under applicable law, then such
          provision shall be construed, limited, modified or, if necessary,
          severed to the extent necessary to eliminate its invalidity or
          unenforceability, without in any way affecting the remaining parts of
          this Agreement. Any prevention of or delay in performance by Eggschain
          hereunder due to labor disputes, acts of god, failure of the Internet,
          governmental restrictions, enemy or hostile governmental action, fire
          or other casualty or other causes beyond its reasonable control shall
          excuse the performance of its obligations for a period equal to the
          duration of any such prevention or delay.
        </Typography>
      </FuseAnimate>
    </div>
  );
}

export default TermsConditionsPage;
