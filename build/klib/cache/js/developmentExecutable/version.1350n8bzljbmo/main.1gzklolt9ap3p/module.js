(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './html-internal-html-core-runtime.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './html-html-core.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./html-internal-html-core-runtime.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'me.shashwathkamath:shashwathkamath.github.io'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'me.shashwathkamath:shashwathkamath.github.io'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'me.shashwathkamath:shashwathkamath.github.io'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'me.shashwathkamath:shashwathkamath.github.io'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'me.shashwathkamath:shashwathkamath.github.io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'me.shashwathkamath:shashwathkamath.github.io'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'me.shashwathkamath:shashwathkamath.github.io'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'me.shashwathkamath:shashwathkamath.github.io'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'me.shashwathkamath:shashwathkamath.github.io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'me.shashwathkamath:shashwathkamath.github.io'.");
    }
    root['me.shashwathkamath:shashwathkamath.github.io'] = factory(typeof this['me.shashwathkamath:shashwathkamath.github.io'] === 'undefined' ? {} : this['me.shashwathkamath:shashwathkamath.github.io'], this['html-internal-html-core-runtime'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlin-kotlin-stdlib'], this['html-html-core'], this['kotlinx-coroutines-core']);
  }
}(globalThis, function (_, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var THROW_CCE = kotlin_kotlin.$_$.n8;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Section = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var to = kotlin_kotlin.$_$.h9;
  var listOf = kotlin_kotlin.$_$.f4;
  var mapOf = kotlin_kotlin.$_$.g4;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Unit_getInstance = kotlin_kotlin.$_$.z1;
  var KMutableProperty0 = kotlin_kotlin.$_$.o7;
  var THROW_ISE = kotlin_kotlin.$_$.p8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.i6;
  var CoroutineImpl = kotlin_kotlin.$_$.u5;
  var protoOf = kotlin_kotlin.$_$.g7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var isInterface = kotlin_kotlin.$_$.z6;
  var initMetadataForLambda = kotlin_kotlin.$_$.r6;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var listOf_0 = kotlin_kotlin.$_$.e4;
  var B = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var Br = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var Li = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var Ul = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.s6;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var KtList = kotlin_kotlin.$_$.l2;
  var checkIndexOverflow = kotlin_kotlin.$_$.l3;
  var H5 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var SuspendFunction1 = kotlin_kotlin.$_$.v5;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  function main() {
    renderComposable('root', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
  }
  function HeroSection(darkMode, toggleDarkMode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1189753648);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(darkMode) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(toggleDarkMode) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceableGroup_ip860b_k$(-1499598434);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'HeroSection.<anonymous>' call
        var value = HeroSection$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HeroSection.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 2080692349, true, HeroSection$lambda_0(toggleDarkMode, darkMode));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'HeroSection.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Section(tmp0_group, tmp0, $composer_0, 54, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(HeroSection$lambda_1(darkMode, toggleDarkMode, $changed));
    }
  }
  function SummarySection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1822800254);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceableGroup_ip860b_k$(-358119376);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SummarySection.<anonymous>' call
        var value = SummarySection$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Section(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_9_r8sbbh_1, $composer_0, 54, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SummarySection$lambda_0($changed));
    }
  }
  function ExperienceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-188917730);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var jobs = listOf([mapOf([to('title', 'Senior Android and Full Stack Engineer - Infovision, Verizon (Oct 2023 - Present, Basking Ridge, NJ)'), to('details', listOf(['Architect My Verizon Services managing 25M+ devices, enhancing app efficiency and reliability.', 'Build Extension Profile Module for dynamic app module management, optimizing service downloads.', 'Create Carrier Config feature, enabling server-side carrier settings for improved user experience.', 'Developed a Unified Settings App for OEMs, ensuring compliance with Verizon standards and streamlining the device finalization process.', 'Orchestrated cross-functional teams to create an Automation Portal, achieving a 40% reduction in QA workload through optimized testing.'])), to('techStack', 'Android Tech Stack: Kotlin, Clean Architecture pattern, Java, MVI, Jetpack Compose | Full Stack: Typescript, Next Js Framework, Express')]), mapOf([to('title', 'Senior Mobile and Backend Engineer - Johnson Controls Inc. (Aug 2021 - Aug 2023, Edison, NJ)'), to('details', listOf(['Led integration of OAuth for user authentication, enhancing security and user experience across mobile and web platforms.', 'Developed advanced video streaming features using WebRTC, resulting in improved Time to First Frame and user engagement.', 'Architected a Rules Engine with Apache Kafka, optimizing performance for 1 million event messages, driving substantial efficiency gains.', 'Mentored junior engineers on best coding practices, fostering a culture of continuous learning and improving code quality across the team.', 'Resolved complex issues in the Android Native Java and Typescript codebase, ensuring smooth deployment of the CloudVue app on the Google Play Store.', 'Optimized codebase performance, leading to faster load times and a noticeable increase in user satisfaction across applications.'])), to('techStack', 'Android Tech Stack: React Native, Typescript, React Js, Jetpack compose | Full Stack: Typescript, Next Js Framework, Express')]), mapOf([to('title', 'Android Framework Engineer - L&T Technology Services (Oct 2017 - Aug 2021, Berkeley Heights, NJ)'), to('details', listOf(['Enhanced user experience by developing intuitive SetupWizard screens for carrier-specific Samsung devices, leading to increased user satisfaction.', 'Analyzed carrier requirements to maintain and implement critical system app features, ensuring compliance and operational efficiency.', 'Created automation scripts using Python for app testing, significantly reducing manual testing time and improving deployment speed.', 'Partnered with cross-functional teams to gather feedback, driving continuous improvements in carrier applications and enhancing overall performance.', 'Demonstrated strong problem-solving skills by addressing technical challenges in app development, fostering a collaborative team environment.', 'Enhanced app performance by aligning system app features with carrier needs, resulting in improved user satisfaction and engagement.'])), to('techStack', 'Android Tech Stack: Kotlin, MVVM pattern, Java, XML, Jetpack Compose')]), mapOf([to('title', 'Senior Mobile Developer - Shobiz Experiential Communications Pvt Ltd. (Mar 2013 - Dec 2014, Mumbai, India)'), to('details', listOf(['Led mobile app development, enhancing user engagement and data collection efficiency.', 'Resolved app issues, ensuring seamless updates and improved functionality.', 'Utilized Android and iOS tech stack, advancing project delivery timelines.', 'Spearheaded the development of mobile applications, enhancing user engagement and contributing to a 30% increase in client project success.', 'Designed interactive wireframes that improved client presentation outcomes, leading to a notable uptick in project approvals.', 'Fostered teamwork across departments to build kiosk applications, streamlining user data collection and enhancing service responsiveness.'])), to('techStack', 'Mobile Tech Stack: MVP pattern, Java, XML')])]);
      $composer_0.startReplaceableGroup_ip860b_k$(810277017);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>' call
        var value = mutableStateOf(0);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var expandedIndex$delegate = tmp0_group;
      $composer_0.startReplaceableGroup_ip860b_k$(810278403);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>' call
        var value_0 = ExperienceSection$lambda_1;
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ExperienceSection.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -885718799, true, ExperienceSection$lambda_2(jobs, expandedIndex$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_36(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Section(tmp1_group, tmp0, $composer_0, 54, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(ExperienceSection$lambda_3($changed));
    }
  }
  function SkillsSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-166219450);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var skills = listOf(['Android Development', 'React Native', 'React JS', 'Flutter', 'Redux Thunk', 'Java', 'TypeScript', 'Dart', 'JavaScript', 'Kotlin', 'Node JS', 'Express JS', 'PostgreSQL', 'SQL', 'Android Studio', 'VS Code', 'Git', 'Unit Testing', 'Mentorship', 'Agile Methodologies', 'Performance Optimization', 'Continuous Integration']);
      $composer_0.startReplaceableGroup_ip860b_k$(2030156723);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SkillsSection.<anonymous>' call
        var value = SkillsSection$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'SkillsSection.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -258819175, true, SkillsSection$lambda_0(skills));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SkillsSection.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_40(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Section(tmp0_group, tmp0, $composer_0, 54, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SkillsSection$lambda_1($changed));
    }
  }
  function ProjectsSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(785809294);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceableGroup_ip860b_k$(-1157058031);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ProjectsSection.<anonymous>' call
        var value = ProjectsSection$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Section(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_15_7sywoa_1, $composer_0, 54, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(ProjectsSection$lambda_0($changed));
    }
  }
  function ProjectCard(title, description, links, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(513628782);
    $composer_0.startReplaceableGroup_ip860b_k$(-957502680);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ProjectCard.<anonymous>' call
      var value = ProjectCard$lambda;
      this_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ProjectCard.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -1029747987, true, ProjectCard$lambda_0(links, title, description));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_2;
    if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ProjectCard.<anonymous>.<anonymous>' call
      var value_0 = ComposableLambda$invoke$ref_46(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value_0);
      tmp_2 = value_0;
    } else {
      tmp_2 = it_0;
    }
    var tmp_3 = tmp_2;
    var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    Div(tmp0_group, tmp0, $composer_0, 54, 0);
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(ProjectCard$lambda_1(title, description, links, $changed));
    }
  }
  function PatentsAwardsSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2616861);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceableGroup_ip860b_k$(308445333);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'PatentsAwardsSection.<anonymous>' call
        var value = PatentsAwardsSection$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Section(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_24_7sywp4__1, $composer_0, 54, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(PatentsAwardsSection$lambda_0($changed));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(657952457);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-1.<anonymous>.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    var darkMode$delegate = tmp0_group;
    var tmp_1 = invoke$lambda(darkMode$delegate);
    $composer_0.startReplaceableGroup_ip860b_k$(657954816);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_2;
    if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h_0(darkMode$delegate, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_2 = value_0;
    } else {
      tmp_2 = it_0;
    }
    var tmp_3 = tmp_2;
    var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    LaunchedEffect(tmp_1, tmp1_group, $composer_0, 64);
    var tmp_4 = invoke$lambda(darkMode$delegate);
    $composer_0.startReplaceableGroup_ip860b_k$(657961599);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_5;
    if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-1.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$MainKt$lambda_1$lambda$lambda_xloqma(darkMode$delegate);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = it_1;
    }
    var tmp_6 = tmp_5;
    var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    HeroSection(tmp_4, tmp2_group, $composer_0, 48);
    SummarySection($composer_0, 0);
    ExperienceSection($composer_0, 0);
    SkillsSection($composer_0, 0);
    ProjectsSection($composer_0, 0);
    PatentsAwardsSection($composer_0, 0);
    return Unit_getInstance();
  }
  function invoke$lambda($darkMode$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('darkMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $darkMode$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_0($darkMode$delegate, _set____db54di) {
    getLocalDelegateReference('darkMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $darkMode$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h($darkMode$delegate, resultContinuation) {
    this.$darkMode$delegate_1 = $darkMode$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (invoke$lambda(this.$darkMode$delegate_1)) {
            var tmp0_safe_receiver = document.body;
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.classList;
            if (tmp1_safe_receiver == null)
              null;
            else {
              tmp1_safe_receiver.add('dark');
            }
          } else {
            var tmp2_safe_receiver = document.body;
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.classList;
            if (tmp3_safe_receiver == null)
              null;
            else {
              tmp3_safe_receiver.remove('dark');
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h(this.$darkMode$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h_0($darkMode$delegate, resultContinuation) {
    var i = new ComposableSingletons$MainKt$lambda_1$lambda$slambda_ahyx7h($darkMode$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableSingletons$MainKt$lambda_1$lambda$lambda_xloqma($darkMode$delegate) {
    return function () {
      invoke$lambda_0($darkMode$delegate, !invoke$lambda($darkMode$delegate));
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Shashwath Kamath', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Senior Android Developer | Innovator | Mentor', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Get in Touch', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Download Resume', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_6$lambda_uflld4($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Professional Summary', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_7$lambda_brvzjt($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Seasoned Senior Android Developer with over 12 years of hands-on experience in crafting efficient, reliable, and scalable mobile and web applications. Expert in Android Native development using Java and Kotlin, with a strong track record of optimizing app performance, boosting user satisfaction, and delivering innovative solutions that meet rigorous industry standards. Passionate about driving technological advancement through creative problem-solving and mentoring cross-functional teams to foster collaboration and growth. Additionally, proficient in React Native for the past 3 years, enabling seamless cross-platform development and enhanced project versatility.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_8$lambda_h1qhie($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1674034224);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-8.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_8$lambda$lambda_150dmj;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    H2(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 54, 0);
    $composer_0.startReplaceableGroup_ip860b_k$(-1674031523);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-8.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$MainKt$lambda_8$lambda$lambda_150dmj_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    P(tmp1_group, ComposableSingletons$MainKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 54, 0);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_8$lambda$lambda_150dmj($this$H2) {
    $this$H2.classes_ayghm2_k$(['text-center', 'mb-4']);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_8$lambda$lambda_150dmj_0($this$P) {
    $this$P.classes_ayghm2_k$(['text-center', 'mx-auto']);
    $this$P.style_xwwy6r_k$(ComposableSingletons$MainKt$lambda_8$lambda$lambda$lambda_muq9iy);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_8$lambda$lambda$lambda_muq9iy($this$style) {
    $this$style.property_wcrait_k$('max-width', '800px');
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_9$lambda_p5r3ej($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-166483801);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-9.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    Div(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_8_r8sbbi_1, $composer_0, 54, 0);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_9$lambda$lambda_nsjosm($this$Div) {
    $this$Div.classes_ayghm2_k$(['container']);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_10$lambda_vulrrt($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Employment History', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_11$lambda_acvt54($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Skills', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_12$lambda_igqnx3($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Projects', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_13$lambda_nqqwzu($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    ProjectCard('BookDigest (BookApp) - In Progress', 'A mobile app for exchanging books (free or paid). Inspired by the need for affordable used books. Includes backend for data management and CRUD operations.', listOf([to('React Native Frontend', 'https://github.com/shashwathkamath/BookApp'), to('Backend', 'https://github.com/shashwathkamath/BookApp-Backend')]), $composer_0, 438);
    ProjectCard('RedditWithRetrofit', 'A Reddit app that fetches feeds from Reddit APIs and allows posting.', listOf_0(to('View Repository', 'https://github.com/shashwathkamath/RedditWithRetrofit')), $composer_0, 438);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_14$lambda_52vk2d($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(250403597);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_14$lambda$lambda_yj7euu;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    H2(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_12_7sywo7__1, $composer_0, 54, 0);
    $composer_0.startReplaceableGroup_ip860b_k$(250405917);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-14.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$MainKt$lambda_14$lambda$lambda_yj7euu_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    Div(tmp1_group, ComposableSingletons$MainKt_getInstance().lambda_13_7sywo8__1, $composer_0, 54, 0);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda_yj7euu($this$H2) {
    $this$H2.classes_ayghm2_k$(['text-center', 'mb-4']);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_14$lambda$lambda_yj7euu_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['row']);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_15$lambda_xwi14k($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1757954020);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-15.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_15$lambda$lambda_bkckp5;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    Div(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_14_7sywo9__1, $composer_0, 54, 0);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_15$lambda$lambda_bkckp5($this$Div) {
    $this$Div.classes_ayghm2_k$(['container']);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_16$lambda_8azjsd($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Patents & Awards', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_17$lambda_kimx9u($this$B, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Patent: Image-Surveilled Security Escort (US20230274552A1)', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_18$lambda_lounn3($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    Text('View Patent', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_19$lambda_74rtf4($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    B(null, ComposableSingletons$MainKt_getInstance().lambda_17_7sywoc_1, $composer_0, 48, 1);
    Br(null, $composer_0, 0, 1);
    Text('Co-inventor on a system for enhancing user safety using image surveillance and notifications for security escorts. Assignee: Johnson Controls Tyco IP Holdings LLP. ', $composer_0, 6);
    $composer_0.startReplaceableGroup_ip860b_k$(-801691149);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-19.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_19$lambda$lambda_h4rn0b;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    A('https://patents.google.com/patent/US20230274552A1', tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_18_7sywod_1, $composer_0, 438, 0);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_19$lambda$lambda_h4rn0b($this$A) {
    $this$A.attr_w68641_k$('target', '_blank');
    $this$A.attr_w68641_k$('rel', 'noopener noreferrer');
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_20$lambda_1yhqze($this$B, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Award: Best Innovations in Mobile Applications', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_21$lambda_us481l($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    B(null, ComposableSingletons$MainKt_getInstance().lambda_20_7sywp0__1, $composer_0, 48, 1);
    Br(null, $composer_0, 0, 1);
    Text('Awarded by Shobiz for creating an innovative QR scanner module in a mobile app for SAP Singapore.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_22$lambda_bfdcvc($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1019799878);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-22.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_22$lambda$lambda_nrv8od;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    Li(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_19_7sywoe_1, $composer_0, 54, 0);
    $composer_0.startReplaceableGroup_ip860b_k$(1019820006);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-22.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$MainKt$lambda_22$lambda$lambda_nrv8od_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    Li(tmp1_group, ComposableSingletons$MainKt_getInstance().lambda_21_7sywp1__1, $composer_0, 54, 0);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_22$lambda$lambda_nrv8od($this$Li) {
    $this$Li.classes_ayghm2_k$(['list-group-item']);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_22$lambda$lambda_nrv8od_0($this$Li) {
    $this$Li.classes_ayghm2_k$(['list-group-item']);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_23$lambda_he946v($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1767619701);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-23.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_23$lambda$lambda_15otqs;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    H2(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_16_7sywob_1, $composer_0, 54, 0);
    $composer_0.startReplaceableGroup_ip860b_k$(-1767617150);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-23.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$MainKt$lambda_23$lambda$lambda_15otqs_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    Ul(tmp1_group, ComposableSingletons$MainKt_getInstance().lambda_22_7sywp2__1, $composer_0, 54, 0);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_23$lambda$lambda_15otqs($this$H2) {
    $this$H2.classes_ayghm2_k$(['text-center', 'mb-4']);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_23$lambda$lambda_15otqs_0($this$Ul) {
    $this$Ul.classes_ayghm2_k$(['list-group']);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_24$lambda_ot8gq2($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-260069278);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'ComposableSingletons$MainKt.lambda-24.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MainKt$lambda_24$lambda$lambda_q38w5x;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceableGroup_ern0ak_k$();
    Div(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_23_7sywp3__1, $composer_0, 54, 0);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_24$lambda$lambda_q38w5x($this$Div) {
    $this$Div.classes_ayghm2_k$(['container']);
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1521502105, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-2140388959, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1307780096, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-2098647760, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-1275967143, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(2073220302, false, ComposableSingletons$MainKt$lambda_6$lambda_uflld4));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1377216946, false, ComposableSingletons$MainKt$lambda_7$lambda_brvzjt));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-669611988, false, ComposableSingletons$MainKt$lambda_8$lambda_h1qhie));
    var tmp_7 = this;
    tmp_7.lambda_9_r8sbbh_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1047791221, false, ComposableSingletons$MainKt$lambda_9$lambda_p5r3ej));
    var tmp_8 = this;
    tmp_8.lambda_10_7sywo5__1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-283460914, false, ComposableSingletons$MainKt$lambda_10$lambda_vulrrt));
    var tmp_9 = this;
    tmp_9.lambda_11_7sywo6__1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(1920068598, false, ComposableSingletons$MainKt$lambda_11$lambda_acvt54));
    var tmp_10 = this;
    tmp_10.lambda_12_7sywo7__1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-41103810, false, ComposableSingletons$MainKt$lambda_12$lambda_igqnx3));
    var tmp_11 = this;
    tmp_11.lambda_13_7sywo8__1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1919988129, false, ComposableSingletons$MainKt$lambda_13$lambda_nqqwzu));
    var tmp_12 = this;
    tmp_12.lambda_14_7sywo9__1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(830441120, false, ComposableSingletons$MainKt$lambda_14$lambda_52vk2d));
    var tmp_13 = this;
    tmp_13.lambda_15_7sywoa_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(1991786785, false, ComposableSingletons$MainKt$lambda_15$lambda_xwi14k));
    var tmp_14 = this;
    tmp_14.lambda_16_7sywob_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(959934771, false, ComposableSingletons$MainKt$lambda_16$lambda_8azjsd));
    var tmp_15 = this;
    tmp_15.lambda_17_7sywoc_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(860917767, false, ComposableSingletons$MainKt$lambda_17$lambda_kimx9u));
    var tmp_16 = this;
    tmp_16.lambda_18_7sywod_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-1661681943, false, ComposableSingletons$MainKt$lambda_18$lambda_lounn3));
    var tmp_17 = this;
    tmp_17.lambda_19_7sywoe_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(800447895, false, ComposableSingletons$MainKt$lambda_19$lambda_74rtf4));
    var tmp_18 = this;
    tmp_18.lambda_20_7sywp0__1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(1503743294, false, ComposableSingletons$MainKt$lambda_20$lambda_1yhqze));
    var tmp_19 = this;
    tmp_19.lambda_21_7sywp1__1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-773228850, false, ComposableSingletons$MainKt$lambda_21$lambda_us481l));
    var tmp_20 = this;
    tmp_20.lambda_22_7sywp2__1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(176047558, false, ComposableSingletons$MainKt$lambda_22$lambda_bfdcvc));
    var tmp_21 = this;
    tmp_21.lambda_23_7sywp3__1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1332913681, false, ComposableSingletons$MainKt$lambda_23$lambda_he946v));
    var tmp_22 = this;
    tmp_22.lambda_24_7sywp4__1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-826321872, false, ComposableSingletons$MainKt$lambda_24$lambda_ot8gq2));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_7uzpc_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_iyj75t_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_3_xbwncu_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_4_el8fwd_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_5_45frk4_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_6_mw3z0l_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_7_tebvi2_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_8_anno1l_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_9_830jew_k$ = function () {
    return this.lambda_9_r8sbbh_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_10_vhfs3c_k$ = function () {
    return this.lambda_10_7sywo5__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_11_cqrkmv_k$ = function () {
    return this.lambda_11_7sywo6__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_12_5zwmtm_k$ = function () {
    return this.lambda_12_7sywo7__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_13_oqkua3_k$ = function () {
    return this.lambda_13_7sywo8__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_14_rjv08k_k$ = function () {
    return this.lambda_14_7sywo9__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_15_8t6ss3_k$ = function () {
    return this.lambda_15_7sywoa_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_16_9xheoe_k$ = function () {
    return this.lambda_16_7sywob_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_17_so5m4v_k$ = function () {
    return this.lambda_17_7sywoc_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_18_nma8ds_k$ = function () {
    return this.lambda_18_7sywod_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_19_4vm0xb_k$ = function () {
    return this.lambda_19_7sywoe_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_20_irhspl_k$ = function () {
    return this.lambda_20_7sywp0__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_21_tl94_k$ = function () {
    return this.lambda_21_7sywp1__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_22_ipum7d_k$ = function () {
    return this.lambda_22_7sywp2__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_23_xkl8ba_k$ = function () {
    return this.lambda_23_7sywp3__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_24_etx0ut_k$ = function () {
    return this.lambda_24_7sywp4__1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function ExperienceSection$lambda($expandedIndex$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('expandedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $expandedIndex$delegate.get_value_j01efc_k$();
  }
  function ExperienceSection$lambda_0($expandedIndex$delegate, _set____db54di) {
    getLocalDelegateReference('expandedIndex', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $expandedIndex$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function HeroSection$lambda($this$Section) {
    $this$Section.classes_ayghm2_k$(['hero']);
    return Unit_getInstance();
  }
  function HeroSection$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['container']);
    return Unit_getInstance();
  }
  function HeroSection$lambda$lambda$lambda($this$H1) {
    $this$H1.classes_ayghm2_k$(['display-4']);
    return Unit_getInstance();
  }
  function HeroSection$lambda$lambda$lambda_0($this$P) {
    $this$P.classes_ayghm2_k$(['lead']);
    return Unit_getInstance();
  }
  function HeroSection$lambda$lambda$lambda_1($this$A) {
    $this$A.classes_ayghm2_k$(['btn', 'btn-light', 'btn-lg']);
    $this$A.attr_w68641_k$('aria-label', 'Get in Touch');
    return Unit_getInstance();
  }
  function HeroSection$lambda$lambda$lambda_2($this$A) {
    $this$A.classes_ayghm2_k$(['btn', 'btn-resume']);
    $this$A.attr_w68641_k$('aria-label', 'Download Resume');
    $this$A.attr_w68641_k$('download', '');
    return Unit_getInstance();
  }
  function HeroSection$lambda$lambda$lambda$lambda($toggleDarkMode) {
    return function (it) {
      $toggleDarkMode();
      return Unit_getInstance();
    };
  }
  function HeroSection$lambda$lambda$lambda_3($toggleDarkMode) {
    return function ($this$Button) {
      $this$Button.classes_ayghm2_k$(['btn', 'btn-toggle']);
      $this$Button.onClick_q9cds6_k$(HeroSection$lambda$lambda$lambda$lambda($toggleDarkMode));
      return Unit_getInstance();
    };
  }
  function HeroSection$lambda$lambda$lambda_4($darkMode) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      Text($darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode', $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HeroSection$lambda$lambda_0($toggleDarkMode, $darkMode) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-1436031007);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'HeroSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = HeroSection$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H1(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-1436028804);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'HeroSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = HeroSection$lambda$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      P(tmp1_group, ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-1436024863);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'HeroSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = HeroSection$lambda$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      A('#contact', tmp2_group, ComposableSingletons$MainKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 438, 0);
      Br(null, $composer_0, 0, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1436017664);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'HeroSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = HeroSection$lambda$lambda$lambda_2;
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      A('Shashwath-Kamath-Resume.pdf', tmp3_group, ComposableSingletons$MainKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 438, 0);
      Br(null, $composer_0, 0, 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-1436010510);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($toggleDarkMode);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'HeroSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = HeroSection$lambda$lambda$lambda_3($toggleDarkMode);
        $composer_0.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HeroSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_9 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_9, 127786136, true, HeroSection$lambda$lambda$lambda_4($darkMode));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_10;
      if (invalid_0 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'HeroSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_4);
        tmp_10 = value_4;
      } else {
        tmp_10 = it_4;
      }
      var tmp_11 = tmp_10;
      var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Button(tmp4_group, tmp0, $composer_0, 48, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HeroSection$lambda_0($toggleDarkMode, $darkMode) {
    return function ($this$Section, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-237924478);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'HeroSection.<anonymous>.<anonymous>.<anonymous>' call
        var value = HeroSection$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'HeroSection.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1862485666, true, HeroSection$lambda$lambda_0($toggleDarkMode, $darkMode));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'HeroSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HeroSection$lambda_1($darkMode, $toggleDarkMode, $$changed) {
    return function ($composer, $force) {
      HeroSection($darkMode, $toggleDarkMode, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SummarySection$lambda($this$Section) {
    $this$Section.id_e4l56n_k$('summary');
    $this$Section.classes_ayghm2_k$(['section', 'bg-light']);
    return Unit_getInstance();
  }
  function SummarySection$lambda_0($$changed) {
    return function ($composer, $force) {
      SummarySection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ExperienceSection$lambda_1($this$Section) {
    $this$Section.id_e4l56n_k$('experience');
    $this$Section.classes_ayghm2_k$(['section']);
    return Unit_getInstance();
  }
  function ExperienceSection$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['container']);
    return Unit_getInstance();
  }
  function ExperienceSection$lambda$lambda$lambda($this$H2) {
    $this$H2.classes_ayghm2_k$(['text-center', 'mb-4']);
    return Unit_getInstance();
  }
  function ExperienceSection$lambda$lambda$lambda_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['accordion']);
    return Unit_getInstance();
  }
  function ExperienceSection$lambda$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['accordion-item']);
    return Unit_getInstance();
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda($this$H2) {
    $this$H2.classes_ayghm2_k$(['accordion-header']);
    return Unit_getInstance();
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda($index, $expandedIndex$delegate) {
    return function (it) {
      ExperienceSection$lambda_0($expandedIndex$delegate, ExperienceSection$lambda($expandedIndex$delegate) === $index ? -1 : $index);
      return Unit_getInstance();
    };
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda($index, $expandedIndex$delegate) {
    return function ($this$Button) {
      $this$Button.classes_ayghm2_k$(['accordion-button', !($index === ExperienceSection$lambda($expandedIndex$delegate)) ? 'collapsed' : '']);
      $this$Button.attr_w68641_k$('type', 'button');
      $this$Button.onClick_q9cds6_k$(ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda($index, $expandedIndex$delegate));
      return Unit_getInstance();
    };
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda_0($job) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $job.get_wei43m_k$('title');
      Text((!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda_0($index, $expandedIndex$delegate, $job) {
    return function ($this$H2, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(755202686);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_kpusro_k$($index);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda($index, $expandedIndex$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -2024843357, true, ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda_0($job));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_26(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Button(tmp0_group, tmp0, $composer_0, 48, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda_1($index, $expandedIndex$delegate) {
    return function ($this$Div) {
      $this$Div.classes_ayghm2_k$(['accordion-collapse', $index === ExperienceSection$lambda($expandedIndex$delegate) ? 'show' : '']);
      return Unit_getInstance();
    };
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda_1($this$Div) {
    $this$Div.classes_ayghm2_k$(['accordion-body']);
    return Unit_getInstance();
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($this$Ul) {
    $this$Ul.classes_ayghm2_k$(['experience-details']);
    return Unit_getInstance();
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($li) {
    return function ($this$Li, $composer, $changed) {
      var $composer_0 = $composer;
      Text($li, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($job) {
    return function ($this$Ul, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEach' call
      var tmp = $job.get_wei43m_k$('details');
      var tmp0_iterator = ((!(tmp == null) ? isInterface(tmp, KtList) : false) ? tmp : THROW_CCE()).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 815315857, true, ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_28(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Li(null, tmp0, $composer_0, 48, 1);
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($this$P) {
    $this$P.classes_ayghm2_k$(['tech-stack']);
    return Unit_getInstance();
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($job) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $job.get_wei43m_k$('techStack');
      Text((!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda_2($job) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-2099799339);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1652375630, true, ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($job));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_29(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Ul(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-2099792691);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_6, 356592415, true, ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($job));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_0 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_30(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      P(tmp1_group, tmp0_0, $composer_0, 54, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda$lambda$lambda$lambda_2($job) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(755218386);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1558289789, true, ExperienceSection$lambda$lambda$lambda$lambda$lambda$lambda_2($job));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_31(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda$lambda$lambda_0($index, $expandedIndex$delegate, $job) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(1042485173);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ExperienceSection$lambda$lambda$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -768236643, true, ExperienceSection$lambda$lambda$lambda$lambda$lambda_0($index, $expandedIndex$delegate, $job));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_27(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      H2(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(1042499811);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changed_kpusro_k$($index);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ExperienceSection$lambda$lambda$lambda$lambda$lambda_1($index, $expandedIndex$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_6, -1471261924, true, ExperienceSection$lambda$lambda$lambda$lambda$lambda_2($job));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_1 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_32(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Div(tmp1_group, tmp0_0, $composer_0, 48, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda$lambda_1($jobs, $expandedIndex$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var tmp0_iterator = $jobs.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var index_0 = checkIndexOverflow(tmp1);
        $composer_0.startReplaceableGroup_ip860b_k$(-1199546188);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ExperienceSection$lambda$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -18104709, true, ExperienceSection$lambda$lambda$lambda$lambda_0(index_0, $expandedIndex$delegate, item));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_33(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda$lambda_0($jobs, $expandedIndex$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(620570331);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ExperienceSection$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H2(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_10_7sywo5__1, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(620572977);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ExperienceSection$lambda$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -2005027153, true, ExperienceSection$lambda$lambda$lambda_1($jobs, $expandedIndex$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda_2($jobs, $expandedIndex$delegate) {
    return function ($this$Section, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(2123441778);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>' call
        var value = ExperienceSection$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -247405904, true, ExperienceSection$lambda$lambda_0($jobs, $expandedIndex$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ExperienceSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_35(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ExperienceSection$lambda_3($$changed) {
    return function ($composer, $force) {
      ExperienceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SkillsSection$lambda($this$Section) {
    $this$Section.id_e4l56n_k$('skills');
    $this$Section.classes_ayghm2_k$(['section', 'bg-light']);
    return Unit_getInstance();
  }
  function SkillsSection$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['container']);
    return Unit_getInstance();
  }
  function SkillsSection$lambda$lambda$lambda($this$H2) {
    $this$H2.classes_ayghm2_k$(['text-center', 'mb-4']);
    return Unit_getInstance();
  }
  function SkillsSection$lambda$lambda$lambda_0($this$Div) {
    $this$Div.classes_ayghm2_k$(['skills-grid']);
    return Unit_getInstance();
  }
  function SkillsSection$lambda$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['skill-card']);
    $this$Div.attr_w68641_k$('tabindex', '0');
    $this$Div.style_xwwy6r_k$(SkillsSection$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function SkillsSection$lambda$lambda$lambda$lambda$lambda($this$style) {
    $this$style.property_wcrait_k$('animation', 'fadeIn 0.5s ease-in');
    return Unit_getInstance();
  }
  function SkillsSection$lambda$lambda$lambda$lambda_0($it) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      Text($it, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillsSection$lambda$lambda$lambda_1($skills) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = $skills.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $composer_0.startReplaceableGroup_ip860b_k$(-1437709215);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = SkillsSection$lambda$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -422569720, true, SkillsSection$lambda$lambda$lambda$lambda_0(element));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_37(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div(tmp0_group, tmp0, $composer_0, 54, 0);
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillsSection$lambda$lambda_0($skills) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-989131389);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SkillsSection$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      H2(tmp0_group, ComposableSingletons$MainKt_getInstance().lambda_11_7sywo6__1, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-989129125);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = SkillsSection$lambda$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 2007498839, true, SkillsSection$lambda$lambda$lambda_1($skills));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_38(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp1_group, tmp0, $composer_0, 54, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillsSection$lambda_0($skills) {
    return function ($this$Section, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-1742337766);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>' call
        var value = SkillsSection$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 723211480, true, SkillsSection$lambda$lambda_0($skills));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'SkillsSection.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_39(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function SkillsSection$lambda_1($$changed) {
    return function ($composer, $force) {
      SkillsSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ProjectsSection$lambda($this$Section) {
    $this$Section.id_e4l56n_k$('projects');
    $this$Section.classes_ayghm2_k$(['section']);
    return Unit_getInstance();
  }
  function ProjectsSection$lambda_0($$changed) {
    return function ($composer, $force) {
      ProjectsSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ProjectCard$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['col-md-6', 'mb-4']);
    return Unit_getInstance();
  }
  function ProjectCard$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['card', 'h-100']);
    return Unit_getInstance();
  }
  function ProjectCard$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_ayghm2_k$(['card-body']);
    return Unit_getInstance();
  }
  function ProjectCard$lambda$lambda$lambda$lambda($this$H5) {
    $this$H5.classes_ayghm2_k$(['card-title']);
    return Unit_getInstance();
  }
  function ProjectCard$lambda$lambda$lambda$lambda_0($title) {
    return function ($this$H5, $composer, $changed) {
      var $composer_0 = $composer;
      Text($title, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ProjectCard$lambda$lambda$lambda$lambda_1($this$P) {
    $this$P.classes_ayghm2_k$(['card-text']);
    return Unit_getInstance();
  }
  function ProjectCard$lambda$lambda$lambda$lambda_2($description) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($description, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ProjectCard$lambda$lambda$lambda$lambda_3($idx) {
    return function ($this$A) {
      $this$A.classes_ayghm2_k$([$idx === 0 ? 'btn btn-primary' : 'btn btn-secondary ms-2']);
      $this$A.attr_w68641_k$('target', '_blank');
      $this$A.attr_w68641_k$('rel', 'noopener noreferrer');
      return Unit_getInstance();
    };
  }
  function ProjectCard$lambda$lambda$lambda$lambda_4($label) {
    return function ($this$A, $composer, $changed) {
      var $composer_0 = $composer;
      Text($label, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ProjectCard$lambda$lambda$lambda_0($links, $title, $description) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(-1725206817);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ProjectCard$lambda$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1269644556, true, ProjectCard$lambda$lambda$lambda$lambda_0($title));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_41(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      H5(tmp0_group, tmp0, $composer_0, 54, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-1725204866);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = ProjectCard$lambda$lambda$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_6, -289921079, true, ProjectCard$lambda$lambda$lambda$lambda_2($description));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_0 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_42(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      P(tmp1_group, tmp0_0, $composer_0, 54, 0);
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var tmp0_iterator = $links.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var idx = checkIndexOverflow(tmp1);
        var label = item.component1_7eebsc_k$();
        var url = item.component2_7eebsb_k$();
        $composer_0.startReplaceableGroup_ip860b_k$(-961813753);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_0.changed_kpusro_k$(idx);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (invalid_1 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = ProjectCard$lambda$lambda$lambda$lambda_3(idx);
          $composer_0.updateRememberedValue_l1wh71_k$(value_3);
          tmp_9 = value_3;
        } else {
          tmp_9 = it_3;
        }
        var tmp_10 = tmp_9;
        var tmp0_group_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_11, 2131043798, true, ProjectCard$lambda$lambda$lambda$lambda_4(label));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_12;
        if (invalid_2 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_4 = ComposableLambda$invoke$ref_43(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_4);
          tmp_12 = value_4;
        } else {
          tmp_12 = it_4;
        }
        var tmp_13 = tmp_12;
        var tmp0_1 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_3.endReplaceableGroup_ern0ak_k$();
        A(url, tmp0_group_0, tmp0_1, $composer_0, 384, 0);
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ProjectCard$lambda$lambda_0($links, $title, $description) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(515164543);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ProjectCard$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 623731371, true, ProjectCard$lambda$lambda$lambda_0($links, $title, $description));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_44(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ProjectCard$lambda_0($links, $title, $description) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(418520452);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>' call
        var value = ProjectCard$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1917386156, true, ProjectCard$lambda$lambda_0($links, $title, $description));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'ProjectCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_45(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp0_group, tmp0, $composer_0, 54, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ProjectCard$lambda_1($title, $description, $links, $$changed) {
    return function ($composer, $force) {
      ProjectCard($title, $description, $links, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PatentsAwardsSection$lambda($this$Section) {
    $this$Section.id_e4l56n_k$('patents');
    $this$Section.classes_ayghm2_k$(['section', 'bg-light']);
    return Unit_getInstance();
  }
  function PatentsAwardsSection$lambda_0($$changed) {
    return function ($composer, $force) {
      PatentsAwardsSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  mainWrapper();
  return _;
}));
