import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = async () => {
    await dispatch(logout());
    await dispatch(reset());
    navigate("/signin");
  };

  return (
    <aside className="aside">
      <div className="aside__container">
        <div className="aside__title">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7509 0.0229001L16.0242 0.0507784L16.2945 0.089609L16.5617 0.139392L16.8248 0.199131L17.0839 0.268827L17.3399 0.348479L17.5908 0.438088L17.8366 0.537654L18.0783 0.645185L18.315 0.762672L18.5465 0.88912L18.7729 1.02353L18.9932 1.16691L19.2074 1.31825L19.4155 1.47755L19.6174 1.64383L19.8122 1.81807L20.0009 1.99928L20.1825 2.18845L20.3569 2.3836L20.5231 2.58572L20.6822 2.79381L20.8342 3.00787L20.977 3.22891L21.1116 3.45492L21.2381 3.68592L21.3554 3.92288L21.4635 4.16483L21.5624 4.41075L21.6522 4.66166L21.7318 4.91754L21.8011 5.17641L21.8613 5.44026L21.9113 5.7071L21.95 5.97791L21.9776 6.25172L21.9949 6.52851L22 6.8073V15.1987L21.9949 15.4775L21.9776 15.7533L21.95 16.0271L21.9113 16.2969L21.8613 16.5637L21.8011 16.8266L21.7318 17.0864L21.6522 17.3413L21.5624 17.5922L21.4635 17.8382L21.3554 18.0801L21.2381 18.3161L21.1116 18.5471L20.977 18.7731L20.8342 18.9931L20.6822 19.2072L20.5231 19.4163L20.3569 19.6174L20.1825 19.8125L20.0009 20.0017L19.8122 20.1829L19.6174 20.3572L19.4155 20.5234L19.2074 20.6827L18.9932 20.8341L18.7729 20.9765L18.5465 21.1119L18.315 21.2373L18.0783 21.3548L17.8366 21.4633L17.5908 21.5619L17.3399 21.6515L17.0839 21.7322L16.8248 21.8019L16.5617 21.8616L16.2945 21.9104L16.0242 21.9492L15.7509 21.9781L15.4734 21.995L15.194 22H6.80603L6.52657 21.995L6.25016 21.9781L5.9758 21.9492L5.70552 21.9104L5.43829 21.8616L5.17515 21.8019L4.91609 21.7312L4.6611 21.6515L4.4102 21.5619L4.16337 21.4633L3.92165 21.3548L3.68503 21.2373L3.4535 21.1119L3.22809 20.9765L3.00779 20.8341L2.7936 20.6827L2.58452 20.5234L2.38257 20.3562L2.18776 20.1819L1.99907 20.0007L1.81752 19.8115L1.64312 19.6164L1.47687 19.4143L1.31776 19.2062L1.16681 18.9921L1.02299 18.7721L0.888363 18.5461L0.762911 18.3141L0.645619 18.0781L0.537506 17.8362L0.437552 17.5892L0.348818 17.3383L0.268243 17.0835L0.198887 16.8236L0.138711 16.5597L0.0897543 16.2929L0.0509968 16.0221L0.0224386 15.7493L0.00611961 15.4725L0 15.1927V6.8073L0.00611961 6.52851L0.0224386 6.25172L0.0509968 5.97791L0.0897543 5.7071L0.138711 5.44026L0.198887 5.17641L0.268243 4.91754L0.348818 4.66166L0.437552 4.41075L0.537506 4.16483L0.645619 3.92288L0.762911 3.68592L0.888363 3.45492L1.02299 3.22891L1.16681 3.00787L1.31776 2.79381L1.47687 2.58572L1.64312 2.3836L1.81752 2.18845L1.99907 1.99928L2.18776 1.81807L2.38257 1.64383L2.58452 1.47755L2.7936 1.31825L3.00779 1.16691L3.22809 1.02353L3.4535 0.88912L3.68503 0.762672L3.92165 0.645185L4.16337 0.537654L4.4102 0.438088L4.6611 0.348479L4.91609 0.268827L5.17515 0.199131L5.43829 0.139392L5.70552 0.089609L5.9758 0.0507784L6.25016 0.0229001L6.52657 0.00597393L6.80603 0H15.194L15.4734 0.00597393L15.7509 0.0229001ZM10.0198 13.2522L9.88827 13.2611L9.75874 13.2751L9.63023 13.295L9.50375 13.3199L9.37932 13.3497L9.25693 13.3856L9.13658 13.4254L9.01827 13.4702L8.90199 13.52L8.78878 13.5748L8.67863 13.6335L8.57051 13.6962L8.46648 13.7639L8.36449 13.8356L8.26555 13.9113L8.1707 13.9909L8.07891 14.0736L7.99017 14.1612L7.90552 14.2508L7.82494 14.3444L7.74743 14.442L7.67501 14.5425L7.60566 14.6451L7.5414 14.7516L7.48122 14.8602L7.42615 14.9717L7.37515 15.0862L7.32925 15.2027L7.28846 15.3221L7.25276 15.4426L7.22216 15.5661L7.19666 15.6915L7.17626 15.818L7.16198 15.9474L7.1528 16.0768L7.14974 16.2093V16.2202H11.8476L11.9802 16.2172L12.1117 16.2083L12.2423 16.1943L12.3698 16.1744L12.4962 16.1495L12.6217 16.1197L12.7441 16.0838L12.8644 16.044L12.9817 15.9992L13.098 15.9494L13.2112 15.8946L13.3214 15.8359L13.4295 15.7732L13.5345 15.7055L13.6355 15.6338L13.7344 15.5581L13.8293 15.4785L13.9221 15.3958L14.0098 15.3092L14.0945 15.2186L14.1751 15.125L14.2526 15.0274L14.325 14.9269L14.3943 14.8243L14.4586 14.7178L14.5188 14.6092L14.5739 14.4977L14.6248 14.3832L14.6707 14.2667L14.7115 14.1473L14.7472 14.0268L14.7789 13.9033L14.8044 13.7779L14.8237 13.6514L14.838 13.523L14.8472 13.3926L14.8503 13.2601V13.2502H10.1524L10.0198 13.2522ZM7.14974 9.52643L7.1528 9.66084L7.16198 9.79327L7.17626 9.92469L7.19666 10.0541L7.22216 10.1816L7.25276 10.308L7.28948 10.4315L7.33027 10.553L7.37719 10.6714L7.42819 10.7879L7.48326 10.9024L7.54344 11.0129L7.60872 11.1215L7.67807 11.227L7.75151 11.3296L7.82902 11.4281L7.9096 11.5237L7.99527 11.6163L8.08401 11.7049L8.17682 11.7896L8.27269 11.8712L8.37163 11.9479L8.47362 12.0205L8.57867 12.0892L8.68781 12.154L8.79898 12.2147L8.91219 12.2695L9.02846 12.3202L9.1478 12.366L9.26815 12.4079L9.39156 12.4437L9.51701 12.4746L9.64451 12.4995L9.77302 12.5194L9.90357 12.5343L10.0362 12.5423L10.1698 12.5453H14.8941V12.5343L14.8911 12.3999L14.8829 12.2675L14.8676 12.136L14.8482 12.0066L14.8217 11.8792L14.7911 11.7527L14.7554 11.6293L14.7136 11.5078L14.6677 11.3893L14.6167 11.2728L14.5606 11.1583L14.5004 11.0478L14.4351 10.9393L14.3668 10.8337L14.2934 10.7322L14.2159 10.6326L14.1343 10.537L14.0496 10.4444L13.9609 10.3558L13.8681 10.2712L13.7722 10.1905L13.6733 10.1129L13.5702 10.0402L13.4652 9.97149L13.3571 9.90677L13.2459 9.84703L13.1317 9.79127L13.0154 9.7405L12.8971 9.6947L12.7757 9.65387L12.6523 9.61703L12.5268 9.58717L12.4004 9.56128L12.2708 9.54136L12.1403 9.52643L12.0087 9.51846L11.8751 9.51548H7.14974V9.52643ZM10.0198 5.83255L9.88827 5.84151L9.75874 5.85545L9.63023 5.87536L9.50375 5.90025L9.37932 5.93012L9.25693 5.96597L9.13658 6.00579L9.01827 6.0506L8.90199 6.10038L8.78878 6.15514L8.67863 6.21388L8.57051 6.27661L8.46648 6.34432L8.36449 6.416L8.26555 6.49167L8.1707 6.57133L8.07891 6.65396L7.99017 6.74158L7.90552 6.83119L7.82494 6.92578L7.74743 7.02236L7.67501 7.12292L7.60566 7.22547L7.5414 7.33201L7.48122 7.44053L7.42615 7.55205L7.37515 7.66655L7.32925 7.78304L7.28846 7.90252L7.25276 8.02299L7.22216 8.14645L7.19666 8.2719L7.17626 8.39835L7.16198 8.52779L7.1528 8.65722L7.14974 8.78964V8.8006H11.8476L11.9802 8.79761L12.1117 8.78865L12.2423 8.77471L12.3698 8.7548L12.4962 8.72991L12.6217 8.70004L12.7441 8.66419L12.8644 8.62437L12.9817 8.57956L13.098 8.52978L13.2112 8.47502L13.3214 8.41627L13.4295 8.35355L13.5345 8.28584L13.6355 8.21416L13.7344 8.13849L13.8293 8.05883L13.9221 7.97619L14.0098 7.88957L14.0945 7.79897L14.1751 7.70538L14.2526 7.6078L14.325 7.50724L14.3943 7.40469L14.4586 7.29815L14.5188 7.18963L14.5739 7.07811L14.6248 6.96361L14.6707 6.84712L14.7115 6.72764L14.7472 6.60717L14.7789 6.48371L14.8044 6.35825L14.8237 6.23181L14.838 6.10337L14.8472 5.97294L14.8503 5.84051V5.83056H10.1524L10.0198 5.83255Z"
              fill="white"
            ></path>
          </svg>
          <h1>Logo</h1>
        </div>
        {user ? (
          <ul className="aside__list">
            <li className="aside__list__link">
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li className="aside__list__link">
              <NavLink to="/tables">Tables</NavLink>
            </li>
            <li className="aside__list__link">
              <NavLink to="/billing">Billing</NavLink>
            </li>
            <li className="aside__list__link">
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="aside__list__link">
              <button onClick={onLogout} className="btn">
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
