// @ts-nocheck
declare const ptr: any;
declare const Interceptor: any;
declare const Il2Cpp: any;

const QUEST_PLATFORM = 1;

async function loadQuestServers() {
  console.log("\n");
  console.log("[+] Unpatchable Quest Servers");
  console.log("[+] Made by w2g8 on discord...");

  try {
      // Local symbols.ts / bypass.js already set Il2Cpp.$config.exports
      const mapping: any = {
  "il2cpp_init": "YpQdtdavUNM",
  "il2cpp_init_utf16": "UXsQ_GalCqY",
  "il2cpp_shutdown": "bMCXDOBLbAR",
  "il2cpp_set_config_dir": "dTUlTDFNAes",
  "il2cpp_set_data_dir": "IFjPVpaRwbb",
  "il2cpp_set_temp_dir": "xINwOVYDXAF",
  "il2cpp_set_commandline_arguments": "ZPLkxzegent",
  "il2cpp_set_commandline_arguments_utf16": "OhQLbRCbPEu",
  "il2cpp_set_config_utf16": "IRbQhkWHCuY",
  "il2cpp_set_config": "OkE_ulsX_Xy",
  "il2cpp_set_memory_callbacks": "WudFqLhDrik",
  "il2cpp_memory_pool_set_region_size": "viZXR_EtkML",
  "il2cpp_memory_pool_get_region_size": "ouyCNPdYdCx",
  "il2cpp_get_corlib": "CVSCUaJAnjq",
  "il2cpp_add_internal_call": "kEKvGYOOpEX",
  "il2cpp_resolve_icall": "eGdYDnCMOFw",
  "il2cpp_class_is_assignable_from": "DNmIwrBgysg",
  "il2cpp_class_is_subclass_of": "dnvXwlhnVXx",
  "il2cpp_class_has_parent": "BzddisZRjTq",
  "il2cpp_class_from_il2cpp_type": "LfyuoZGoQl_",
  "il2cpp_class_from_name": "jDTHEOMbVRf",
  "il2cpp_class_from_system_type": "FpNxUrsfzBx",
  "il2cpp_class_get_element_class": "pzCkIapveZU",
  "il2cpp_class_get_events": "mteehCZeZFa",
  "il2cpp_class_get_fields": "ClmPfGhMkOq",
  "il2cpp_class_get_nested_types": "WHfnILIaiwR",
  "il2cpp_class_get_interfaces": "hoQMjuOnKqU",
  "il2cpp_class_get_properties": "YGxGPUCvWgx",
  "il2cpp_class_get_property_from_name": "KPUvFaytSEM",
  "il2cpp_class_get_field_from_name": "haWPkXlFGIM",
  "il2cpp_class_get_methods": "pjsZfBcyHJY",
  "il2cpp_class_get_method_from_name": "hCbXLYXzViM",
  "il2cpp_alloc": "Hh_BcIZWYTv",
  "il2cpp_free": "ZKRf_nQT_dE",
  "il2cpp_array_class_get": "ZOqDbgEbLyb",
  "il2cpp_array_length": "qTysSAQPDWG",
  "il2cpp_array_get_byte_length": "ocPEuUEcWLC",
  "il2cpp_array_new": "JsDSqVJUSTB",
  "il2cpp_array_new_specific": "ByoqeQJsUpn",
  "il2cpp_array_new_full": "pXHWTNbrNea",
  "il2cpp_bounded_array_class_get": "YTZCEyVMuoO",
  "il2cpp_array_element_size": "QDiNbctHDWh",
  "il2cpp_assembly_get_image": "UzNytnzwiCS",
  "il2cpp_class_for_each": "vPAQgVRQbwR",
  "il2cpp_class_enum_basetype": "pNDyeIIQrdu",
  "il2cpp_class_is_inited": "eWEUCWrwmjV",
  "il2cpp_class_is_generic": "rCNTCL_NCKy",
  "il2cpp_class_is_inflated": "jXhzNWHzGEU",
  "il2cpp_class_get_type_token": "TX_MomhyPiE",
  "il2cpp_class_has_attribute": "FaIseCiiep_",
  "il2cpp_class_has_references": "_OdsimwVUYH",
  "il2cpp_class_is_enum": "gQtVQtsfzQA",
  "il2cpp_class_get_image": "cfVuDqoWhEH",
  "il2cpp_class_get_assemblyname": "YaDbGiLVU_S",
  "il2cpp_class_get_rank": "ucUkSEzVYoK",
  "il2cpp_class_get_data_size": "NmzLhWPJWLH",
  "il2cpp_class_get_static_field_data": "ldLrhMdKunU",
  "il2cpp_stats_dump_to_file": "ZOIdFPWNxlR",
  "il2cpp_stats_get_value": "BeobQpSNDlQ",
  "il2cpp_domain_get": "KlJgEeGMmlK",
  "il2cpp_domain_assembly_open": "EIfPnZUYZda",
  "il2cpp_domain_get_assemblies": "vVjqBsPRrvX",
  "il2cpp_raise_exception": "iaQukHUcYvm",
  "il2cpp_exception_from_name_msg": "WBBCdBOfyBB",
  "il2cpp_class_get_name": "sDZPgasstfi",
  "il2cpp_type_get_name_chunked": "HnXxfmnQ__j",
  "il2cpp_class_get_namespace": "IblzjQuTypB",
  "il2cpp_class_get_parent": "amfTEhZVeWs",
  "il2cpp_class_get_declaring_type": "gweVqelCTpl",
  "il2cpp_class_instance_size": "KxPsllsexgW",
  "il2cpp_class_num_fields": "laWYfKauTIR",
  "il2cpp_class_is_valuetype": "miBmyodPTvc",
  "il2cpp_class_value_size": "zvlGyIIjwqN",
  "il2cpp_class_is_blittable": "izEknlyB_YG",
  "il2cpp_class_get_flags": "aJAoGAOrYLi",
  "il2cpp_class_is_abstract": "_HCVwbblcAL",
  "il2cpp_class_is_interface": "yqKpscgIDqQ",
  "il2cpp_class_array_element_size": "poeNDCnvDLc",
  "il2cpp_class_from_type": "lCXAlZgRgXG",
  "il2cpp_class_get_type": "BOYuMInuKaQ",
  "il2cpp_field_static_get_value": "ASzuhtQzNVi",
  "il2cpp_field_static_set_value": "vcjvh_JYBDt",
  "il2cpp_field_set_value_object": "AeWsePGiMay",
  "il2cpp_field_is_literal": "aMEJUNlbsog",
  "il2cpp_gc_collect": "tIWlqKxxEOo",
  "il2cpp_gc_collect_a_little": "wqJDKvRHOzu",
  "il2cpp_gc_start_incremental_collection": "GiaFdKmJomd",
  "il2cpp_gc_disable": "jMsbyipEjLH",
  "il2cpp_gc_enable": "vrvZvemcLNw",
  "il2cpp_gc_is_disabled": "yIrFeqUlSwV",
  "il2cpp_gc_set_mode": "hNjgLKajBnQ",
  "il2cpp_gc_get_max_time_slice_ns": "LozBFhDesoC",
  "il2cpp_gc_set_max_time_slice_ns": "GLcdUnAxrBC",
  "il2cpp_gc_is_incremental": "SyDMeWsdwtR",
  "il2cpp_gc_get_used_size": "MaoSHVbPeUb",
  "il2cpp_gc_get_heap_size": "kFDwupjAOyG",
  "il2cpp_get_exception_argument_null": "AdyRD_qmWiN",
  "il2cpp_format_exception": "IlDKgrpTuPx",
  "il2cpp_format_stack_trace": "zOFxTUqFIwZ",
  "il2cpp_unhandled_exception": "YTAgpfjgbjB",
  "il2cpp_native_stack_trace": "aQWTnJAgpff",
  "il2cpp_field_get_flags": "KHLQodYDHfT",
  "il2cpp_field_get_from_reflection": "_ChMVUNUijP",
  "il2cpp_field_get_name": "vxYTzvNDBba",
  "il2cpp_field_get_parent": "JzZMHPOHIZW",
  "il2cpp_field_get_object": "ptBfDSctwQh",
  "il2cpp_field_get_offset": "XxAsUNNUVwM",
  "il2cpp_field_get_type": "qTNvPBIssYo",
  "il2cpp_field_get_value": "nVKOFXaFgkv",
  "il2cpp_field_get_value_object": "DcqDMwT__vD",
  "il2cpp_field_has_attribute": "bWBbUUVoyOe",
  "il2cpp_field_set_value": "rQWeNACcbRJ",
  "il2cpp_offset_of_array_length_in_array_object_header": "AAxDtTxXUGd",
  "il2cpp_offset_of_array_bounds_in_array_object_header": "KbjnEKwzzTh",
  "il2cpp_allocation_granularity": "UssbaRJoNXd",
  "il2cpp_unity_liveness_allocate_struct": "xLKhnTZTVrF",
  "il2cpp_unity_liveness_calculation_from_root": "ZPAVIMBMVKf",
  "il2cpp_unity_liveness_calculation_from_statics": "IpqpNFLFheE",
  "il2cpp_unity_liveness_finalize": "wR_rHEibZkt",
  "il2cpp_unity_liveness_free_struct": "QfuDkBUsQaY",
  "il2cpp_method_get_return_type": "OLNCxXaIsWP",
  "il2cpp_method_get_declaring_type": "mxkTDSMoeZz",
  "il2cpp_method_get_name": "pzLXtMvdINn",
  "il2cpp_method_get_from_reflection": "ovxynbNqnvw",
  "il2cpp_method_get_object": "XarDVmZRWSu",
  "il2cpp_method_is_generic": "jYLdOJS_UWN",
  "il2cpp_method_is_inflated": "HI_qMeKejIH",
  "il2cpp_method_is_instance": "OBZHDcUNswk",
  "il2cpp_gc_wbarrier_set_field": "OsaYAMZVEGV",
  "il2cpp_gc_has_strict_wbarriers": "uZxPXWZlQVl",
  "il2cpp_gc_set_external_allocation_tracker": "ZeLdfPzNyGt",
  "il2cpp_gc_set_external_wbarrier_tracker": "vpvkfQhZeDF",
  "il2cpp_gc_foreach_heap": "SG_sDVKngfA",
  "il2cpp_stop_gc_world": "pJTZwmZjUXg",
  "il2cpp_start_gc_world": "PFDPwzSaSKc",
  "il2cpp_gc_alloc_fixed": "sOeTeEoyQvT",
  "il2cpp_gc_free_fixed": "HTkONittENB",
  "il2cpp_gchandle_new": "uziIpiEEXuu",
  "il2cpp_gchandle_new_weakref": "c_WxWlZZnQx",
  "il2cpp_gchandle_get_target": "HahVzhJBPmi",
  "il2cpp_gchandle_free": "wHvJRmIrmGF",
  "il2cpp_gchandle_foreach_get_target": "I_UCenJYSqc",
  "il2cpp_object_header_size": "enWtomnPsmi",
  "il2cpp_array_object_header_size": "rrZehIktl_o",
  "il2cpp_object_unbox": "SYFskPuHtEU",
  "il2cpp_value_box": "kEmQVUdHSjD",
  "il2cpp_monitor_enter": "L_yTGepajpK",
  "il2cpp_monitor_try_enter": "IhsHCryMCdd",
  "il2cpp_monitor_exit": "wauPLnejKPA",
  "il2cpp_monitor_pulse": "lqcYEXNDVqC",
  "il2cpp_monitor_pulse_all": "ilwnmmLvRWp",
  "il2cpp_monitor_wait": "Zx_LzesqxGl",
  "il2cpp_monitor_try_wait": "ZZbQAiGNWTi",
  "il2cpp_runtime_invoke": "vMOncn_mPkh",
  "il2cpp_runtime_invoke_convert_args": "wXuTLwpclGk",
  "il2cpp_runtime_class_init": "jdjWhlczxLT",
  "il2cpp_runtime_object_init": "YwcrjymLSmm",
  "il2cpp_runtime_object_init_exception": "__XyJpyqKqA",
  "il2cpp_runtime_unhandled_exception_policy_set": "atVOnvZNwIL",
  "il2cpp_string_length": "TMwHQFgPvdi",
  "il2cpp_method_get_param_count": "jkgOplsIeev",
  "il2cpp_method_get_param": "TysfwLoVvVp",
  "il2cpp_method_get_class": "EAxhpWIbnmo",
  "il2cpp_method_has_attribute": "EWVgXgDXtfb",
  "il2cpp_method_get_flags": "iLHtKIxfWOQ",
  "il2cpp_method_get_token": "lQUxuSDshmv",
  "il2cpp_method_get_param_name": "ZmJBCfDKjSW",
  "il2cpp_property_get_flags": "daMqBpAmwfQ",
  "il2cpp_property_get_get_method": "hNUKHDBXPNF",
  "il2cpp_property_get_set_method": "ierOnXNnvlO",
  "il2cpp_property_get_name": "TcTikTHmxUj",
  "il2cpp_property_get_parent": "UdouCXXhfFE",
  "il2cpp_object_get_class": "UgEsqf_yNWV",
  "il2cpp_object_get_size": "ePcuKFlRvDN",
  "il2cpp_object_get_virtual_method": "nVzNOBgigRJ",
  "il2cpp_object_new": "biDmObDIsSL",
  "il2cpp_thread_get_frame_at": "LYlmirnuNfc",
  "il2cpp_current_thread_get_stack_depth": "HjmHoziPSif",
  "il2cpp_thread_get_stack_depth": "MLTDIMgVNfc",
  "il2cpp_override_stack_backtrace": "SlQMOIwFVbI",
  "il2cpp_type_get_object": "ADwamVuM__E",
  "il2cpp_type_get_type": "GyYESuFczMs",
  "il2cpp_type_get_class_or_element_class": "eVEScqkqAkJ",
  "il2cpp_type_get_name": "EgcNRRBkIh_",
  "il2cpp_type_is_byref": "HWviBJGsMIs",
  "il2cpp_type_get_attrs": "NLEeuhuiALB",
  "il2cpp_type_equals": "cHkZgiADaLs",
  "il2cpp_type_get_assembly_qualified_name": "TRFrnYvMRRH",
  "il2cpp_type_get_reflection_name": "KdrPsABrzeT",
  "il2cpp_type_is_static": "aCrNCFaiACR",
  "il2cpp_type_is_pointer_type": "CJXTRixIHkI",
  "il2cpp_image_get_assembly": "kgrRJuuDPwR",
  "il2cpp_string_chars": "eqQdDDuVTYt",
  "il2cpp_string_new": "zjpyUryLork",
  "il2cpp_string_new_len": "rLOUGCTUbnB",
  "il2cpp_string_new_utf16": "TMSZWKDmJpG",
  "il2cpp_string_new_wrapper": "kxueRGMmYMS",
  "il2cpp_string_intern": "JMSZxKNnrei",
  "il2cpp_string_is_interned": "bYacAHgoftr",
  "il2cpp_thread_current": "p_LgCyirtVO",
  "il2cpp_thread_attach": "beWaFGdnUmH",
  "il2cpp_thread_detach": "lKGOrXHJHmb",
  "il2cpp_is_vm_thread": "PNvBHdNMsVh",
  "il2cpp_current_thread_walk_frame_stack": "WsOfSaEloQb",
  "il2cpp_thread_walk_frame_stack": "YRstlaLFPOJ",
  "il2cpp_current_thread_get_top_frame": "tXIriaPioRB",
  "il2cpp_thread_get_top_frame": "JTrZnOhJAEW",
  "il2cpp_current_thread_get_frame_at": "rrqtQajJcwq",
  "il2cpp_custom_attrs_from_method": "UraDfQMLgrM",
  "il2cpp_custom_attrs_from_field": "pUGLnbkPVdR",
  "il2cpp_custom_attrs_get_attr": "mhTrftyypfh",
  "il2cpp_custom_attrs_has_attr": "kJJoFrACjAC",
  "il2cpp_custom_attrs_construct": "sjfCwSgaBEn",
  "il2cpp_custom_attrs_free": "GHKJONYgKlf",
  "il2cpp_class_set_userdata": "qpUX_aBdUIb",
  "il2cpp_class_get_userdata_offset": "NWXRGsnNbQN",
  "il2cpp_set_default_thread_affinity": "xInVf_RJIwr",
  "il2cpp_unity_set_android_network_up_state_func": "xFqvpwgRItk",
  "il2cpp_image_get_name": "Fq_DFZF_xvF",
  "il2cpp_image_get_filename": "ulCCVjTihFL",
  "il2cpp_image_get_entry_point": "IDTMrlvyuTq",
  "il2cpp_image_get_class_count": "rUMHoY_etvC",
  "il2cpp_image_get_class": "LiwNWHkLFQX",
  "il2cpp_capture_memory_snapshot": "_OeDDjaaiOb",
  "il2cpp_free_captured_memory_snapshot": "GjBgnOraAAw",
  "il2cpp_set_find_plugin_callback": "XdCQzjxSGiq",
  "il2cpp_register_log_callback": "eVuvTAsNmRq",
  "il2cpp_debugger_set_agent_options": "zmnfsufydBd",
  "il2cpp_is_debugger_attached": "G_zMIhCJywP",
  "il2cpp_register_debugger_agent_transport": "fbUyyTAkpvZ",
  "il2cpp_debug_foreach_method": "YIxfotNyJwT",
  "il2cpp_debug_get_method_info": "XtzbAQhvVSZ",
  "il2cpp_unity_install_unitytls_interface": "khGnVgwnBwS",
  "il2cpp_custom_attrs_from_class": "FmQsaNxNSmz"
};

      const symbols = (Il2Cpp as any).$config.exports;
      if (symbols) {
        for (const key in symbols) {
          if (mapping[key]) {
            symbols[mapping[key]] = symbols[key];
          }
        }
      }

  Il2Cpp.perform(() => {
    const findClass = (n: string) => {
      for (const a of Il2Cpp.domain.assemblies) {
        try {
          const k = a.image.tryClass(n);
          if (k) return k;
        } catch (_) {}
      }
      return null;
    };

    const AppUtils = findClass("AnimalCompany.AppUtils");
    if (!AppUtils) {
      console.log("[-] AppUtils not found");
      return;
    }

    let method: any = null;
    for (const m of AppUtils.methods) {
      if (
        /CalculatePhotonAppVersion/i.test(m.name) &&
        (m.returnType?.name || "") === "System.String"
      ) {
        method = m;
        break;
      }
    }

    if (!method) {
      console.log("[-] CalculatePhotonAppVersion not found");
      return;
    }

    Interceptor.attach(method.virtualAddress, {
      onEnter(args: any) {
        try {
          args[2] = ptr(QUEST_PLATFORM);
        } catch (_) {}
      },
    });
  });
  } catch (e) {
    console.log("[-] Error: " + e);
  }
}

loadQuestServers();
