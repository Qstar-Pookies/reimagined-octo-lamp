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
  "il2cpp_init": "EKlRhoECeeH",
  "il2cpp_init_utf16": "Lm_thJRFIvf",
  "il2cpp_shutdown": "bkDFnINojYl",
  "il2cpp_set_config_dir": "AkIEWTXejKU",
  "il2cpp_set_data_dir": "stRqmpATtsG",
  "il2cpp_set_temp_dir": "xCdggODruIh",
  "il2cpp_set_commandline_arguments": "iCefqIjcAcj",
  "il2cpp_set_commandline_arguments_utf16": "V_OcbwoLHdz",
  "il2cpp_set_config_utf16": "IuXTHMhqQnJ",
  "il2cpp_set_config": "nWpTcHOYjOr",
  "il2cpp_set_memory_callbacks": "GMtXgYdpSoV",
  "il2cpp_memory_pool_set_region_size": "CjNIfcbaUoi",
  "il2cpp_memory_pool_get_region_size": "kWtozSNfqEm",
  "il2cpp_get_corlib": "QHpUtgYJ_CU",
  "il2cpp_add_internal_call": "ZdgitcHNTsY",
  "il2cpp_resolve_icall": "dvpWuOcsJqC",
  "il2cpp_class_is_assignable_from": "EuhxlxQlAyb",
  "il2cpp_class_is_subclass_of": "gkOifbgQLK_",
  "il2cpp_class_has_parent": "riVaAnYqGIA",
  "il2cpp_class_from_il2cpp_type": "_sZQrnzPXCD",
  "il2cpp_class_from_name": "y_kQIoqKHbm",
  "il2cpp_class_from_system_type": "FgkEoGBzTue",
  "il2cpp_class_get_element_class": "_PbSpMVRaLg",
  "il2cpp_class_get_events": "SQcyOQPnqlU",
  "il2cpp_class_get_fields": "MImgpHGOAmM",
  "il2cpp_class_get_nested_types": "wVQKAroAVoL",
  "il2cpp_class_get_interfaces": "IGnjdxLmuOq",
  "il2cpp_class_get_properties": "OYSDUlHEHuT",
  "il2cpp_class_get_property_from_name": "xMsNVksPETS",
  "il2cpp_class_get_field_from_name": "VGXltnqPCEH",
  "il2cpp_class_get_methods": "SRuPlixQbHr",
  "il2cpp_class_get_method_from_name": "OKJWuxfW_lt",
  "il2cpp_alloc": "VCjCwAKpAOb",
  "il2cpp_free": "jzpYMbyTSvq",
  "il2cpp_array_class_get": "OrAaECxFPLs",
  "il2cpp_array_length": "bQLYwYvvcqo",
  "il2cpp_array_get_byte_length": "MDkjAQYaAfN",
  "il2cpp_array_new": "iKiOgLCEDGt",
  "il2cpp_array_new_specific": "avXqdaCkUrp",
  "il2cpp_array_new_full": "AsfEEfOPW_a",
  "il2cpp_bounded_array_class_get": "QsvAhdmaprB",
  "il2cpp_array_element_size": "paQINvizIcu",
  "il2cpp_assembly_get_image": "DpxVUpHlEus",
  "il2cpp_class_for_each": "nyVgSkfbvyi",
  "il2cpp_class_enum_basetype": "ljrdAbrjnjS",
  "il2cpp_class_is_inited": "fzbLlrhCYrl",
  "il2cpp_class_is_generic": "bCEHuIIHyPL",
  "il2cpp_class_is_inflated": "inDpSoakkBU",
  "il2cpp_class_get_type_token": "ezSMiEs_dEA",
  "il2cpp_class_has_attribute": "OLJpCJWtwVt",
  "il2cpp_class_has_references": "acXh_JrsMfC",
  "il2cpp_class_is_enum": "lJPRlzMQgcz",
  "il2cpp_class_get_image": "kCbUwkjyfBN",
  "il2cpp_class_get_assemblyname": "fqvTycVLYGx",
  "il2cpp_class_get_rank": "KoAtmFMmbnn",
  "il2cpp_class_get_data_size": "dDtabypkvHg",
  "il2cpp_class_get_static_field_data": "DLAdWEumRDN",
  "il2cpp_stats_dump_to_file": "duyNQvKfHBB",
  "il2cpp_stats_get_value": "MhtLjGkObIc",
  "il2cpp_domain_get": "kOQWaViEAKp",
  "il2cpp_domain_assembly_open": "LovThgPtFrQ",
  "il2cpp_domain_get_assemblies": "_AwWvIsGKqy",
  "il2cpp_raise_exception": "xnwaWQBgQDl",
  "il2cpp_exception_from_name_msg": "lWmrFSEOhUZ",
  "il2cpp_class_get_name": "MSwgnoIFvj_",
  "il2cpp_type_get_name_chunked": "zxfJmrQtTtr",
  "il2cpp_class_get_namespace": "goYVkJseDyR",
  "il2cpp_class_get_parent": "sDKYwHQdyfK",
  "il2cpp_class_get_declaring_type": "VXUfUjGxUit",
  "il2cpp_class_instance_size": "jltcyTHQupY",
  "il2cpp_class_num_fields": "BNWbNZcBfZL",
  "il2cpp_class_is_valuetype": "DPnJoEjxFpR",
  "il2cpp_class_value_size": "tpdKfzp_bsc",
  "il2cpp_class_is_blittable": "THmHMsLxuPE",
  "il2cpp_class_get_flags": "xiDLCDKcGtE",
  "il2cpp_class_is_abstract": "rYcwInkI_el",
  "il2cpp_class_is_interface": "iCzTt_lSyWa",
  "il2cpp_class_array_element_size": "dxeqFMHRuEB",
  "il2cpp_class_from_type": "QL_aQuhhKCe",
  "il2cpp_class_get_type": "eIvbQIUEdIB",
  "il2cpp_field_static_get_value": "nFwECDvhNfS",
  "il2cpp_field_static_set_value": "tuuKSKWmyis",
  "il2cpp_field_set_value_object": "SYZQsJPwjMc",
  "il2cpp_field_is_literal": "NfZmnJHiODt",
  "il2cpp_gc_collect": "KAEBrnZrvqj",
  "il2cpp_gc_collect_a_little": "cQwGjTcyuOw",
  "il2cpp_gc_start_incremental_collection": "NZbvvJyDVmC",
  "il2cpp_gc_disable": "MebWTvuVppm",
  "il2cpp_gc_enable": "JvzqdmXLEmF",
  "il2cpp_gc_is_disabled": "EuQBSRrigTZ",
  "il2cpp_gc_set_mode": "fzTLBesJJOf",
  "il2cpp_gc_get_max_time_slice_ns": "_lDoRbLLVGU",
  "il2cpp_gc_set_max_time_slice_ns": "APPRWlCyIjp",
  "il2cpp_gc_is_incremental": "SpPcQyDWNdf",
  "il2cpp_gc_get_used_size": "RtWuhtlSZvY",
  "il2cpp_gc_get_heap_size": "IEVo_bNFuNC",
  "il2cpp_get_exception_argument_null": "aeYmYcZekgg",
  "il2cpp_format_exception": "xYkNgVJCKP_",
  "il2cpp_format_stack_trace": "xfJpktxmuCt",
  "il2cpp_unhandled_exception": "sjhYOrsCbeO",
  "il2cpp_native_stack_trace": "IGrXWtdmSpZ",
  "il2cpp_field_get_flags": "BVWRBoqHJox",
  "il2cpp_field_get_from_reflection": "wLmslVVIEYd",
  "il2cpp_field_get_name": "PHUeOfsQRXT",
  "il2cpp_field_get_parent": "EGrUborLrxb",
  "il2cpp_field_get_object": "nARqohPiYeu",
  "il2cpp_field_get_offset": "UkSpzulXRVR",
  "il2cpp_field_get_type": "TYnZarmUjVB",
  "il2cpp_field_get_value": "lUoltrzUpnL",
  "il2cpp_field_get_value_object": "yGLZKGVxSPI",
  "il2cpp_field_has_attribute": "TRxMBILHNPm",
  "il2cpp_field_set_value": "IeZRgKSkhID",
  "il2cpp_offset_of_array_length_in_array_object_header": "MYeZjhYTzWL",
  "il2cpp_offset_of_array_bounds_in_array_object_header": "GHrMcspIRDL",
  "il2cpp_allocation_granularity": "mqPhowGLpiu",
  "il2cpp_unity_liveness_allocate_struct": "CMMPevIKmos",
  "il2cpp_unity_liveness_calculation_from_root": "wgxmyTATMtP",
  "il2cpp_unity_liveness_calculation_from_statics": "hCsxjmYWt__",
  "il2cpp_unity_liveness_finalize": "skMoW_fgEcJ",
  "il2cpp_unity_liveness_free_struct": "wjzZcbxpyDQ",
  "il2cpp_method_get_return_type": "fQmgtRjIup_",
  "il2cpp_method_get_declaring_type": "CJgKJBnFcQT",
  "il2cpp_method_get_name": "N_NvfMXrSAs",
  "il2cpp_method_get_from_reflection": "OvVgIPIjrzn",
  "il2cpp_method_get_object": "MGeVpFhdosM",
  "il2cpp_method_is_generic": "jKzduTaxWBJ",
  "il2cpp_method_is_inflated": "mbbgAAQZcPi",
  "il2cpp_method_is_instance": "QDg_cHXotni",
  "il2cpp_gc_wbarrier_set_field": "OqYHIK_UTHq",
  "il2cpp_gc_has_strict_wbarriers": "tomoVOvJhFF",
  "il2cpp_gc_set_external_allocation_tracker": "QBXXECryzpT",
  "il2cpp_gc_set_external_wbarrier_tracker": "sqVvHGARkqu",
  "il2cpp_gc_foreach_heap": "GaERZbNFUat",
  "il2cpp_stop_gc_world": "hcrSkwINO_W",
  "il2cpp_start_gc_world": "FqjRqSIijpU",
  "il2cpp_gc_alloc_fixed": "tpPiD_EeoNz",
  "il2cpp_gc_free_fixed": "iLWdDgYebqJ",
  "il2cpp_gchandle_new": "EzpqAeUXlnk",
  "il2cpp_gchandle_new_weakref": "DaOzTlRsejn",
  "il2cpp_gchandle_get_target": "QCkZG_NkcFu",
  "il2cpp_gchandle_free": "jwtxUpLaGrz",
  "il2cpp_gchandle_foreach_get_target": "icMYYFCum_k",
  "il2cpp_object_header_size": "PYwxpwdPyKf",
  "il2cpp_array_object_header_size": "gmilyYBWLuc",
  "il2cpp_object_unbox": "CxcfFtBITdj",
  "il2cpp_value_box": "kdYPPygLTWI",
  "il2cpp_monitor_enter": "VEcFnJUKFEM",
  "il2cpp_monitor_try_enter": "dOcdXeZJkLa",
  "il2cpp_monitor_exit": "mb_aMLqWnnB",
  "il2cpp_monitor_pulse": "WuoHuINoMdP",
  "il2cpp_monitor_pulse_all": "pVidXJtPBBt",
  "il2cpp_monitor_wait": "vcUrdEjZyRM",
  "il2cpp_monitor_try_wait": "wiczxgdqyNz",
  "il2cpp_runtime_invoke": "MFyuWAcOFwx",
  "il2cpp_runtime_invoke_convert_args": "QaCXLmkrShI",
  "il2cpp_runtime_class_init": "hjzBz_MYgxT",
  "il2cpp_runtime_object_init": "cFAzoYWMNNb",
  "il2cpp_runtime_object_init_exception": "wFMnCTbcNNz",
  "il2cpp_runtime_unhandled_exception_policy_set": "klVbMOsqeEs",
  "il2cpp_string_length": "uPXjUumPJ_D",
  "il2cpp_method_get_param_count": "sOEnnUGpaAW",
  "il2cpp_method_get_param": "TssLWPCYCqk",
  "il2cpp_method_get_class": "MWIfdfNpbiJ",
  "il2cpp_method_has_attribute": "SsnpLA_fsvc",
  "il2cpp_method_get_flags": "TaaIpRgEdap",
  "il2cpp_method_get_token": "iTQVNNrlHau",
  "il2cpp_method_get_param_name": "gWF_gCkwknh",
  "il2cpp_property_get_flags": "jCoFbJNQCSB",
  "il2cpp_property_get_get_method": "XWsYDUWjStU",
  "il2cpp_property_get_set_method": "BgjamSOgPyN",
  "il2cpp_property_get_name": "ADiLjzVdRqB",
  "il2cpp_property_get_parent": "XbfNAtQW_tK",
  "il2cpp_object_get_class": "eVdcCshddJp",
  "il2cpp_object_get_size": "bptNwtJigeR",
  "il2cpp_object_get_virtual_method": "RMTdhiMYjkX",
  "il2cpp_object_new": "LBHyDdvFhFz",
  "il2cpp_thread_get_frame_at": "NfKJGpTsKp_",
  "il2cpp_current_thread_get_stack_depth": "AwufqTNYuZ_",
  "il2cpp_thread_get_stack_depth": "MYqPOCjdaMw",
  "il2cpp_override_stack_backtrace": "kamIsdTXePq",
  "il2cpp_type_get_object": "NxvdBcRpaUP",
  "il2cpp_type_get_type": "GJC_YHHBoP_",
  "il2cpp_type_get_class_or_element_class": "qxZUUAjXRMf",
  "il2cpp_type_get_name": "L_bobHFepDd",
  "il2cpp_type_is_byref": "HxJtguUxbRP",
  "il2cpp_type_get_attrs": "ZMCUauBlrAF",
  "il2cpp_type_equals": "IcfVevsWkEL",
  "il2cpp_type_get_assembly_qualified_name": "JSXaOLIod_D",
  "il2cpp_type_get_reflection_name": "WsRVSWzyzHF",
  "il2cpp_type_is_static": "Zi_rAAYKtbE",
  "il2cpp_type_is_pointer_type": "OFqLdqaCszB",
  "il2cpp_image_get_assembly": "yGsD_zuYtwq",
  "il2cpp_string_chars": "VlvMDDVrAzq",
  "il2cpp_string_new": "pKPoMsnpptS",
  "il2cpp_string_new_len": "fzAbqTNjrXI",
  "il2cpp_string_new_utf16": "gFZicChnnaH",
  "il2cpp_string_new_wrapper": "OOqEgoJEAbd",
  "il2cpp_string_intern": "nNxLkGBgxRK",
  "il2cpp_string_is_interned": "pkfMEJfkINd",
  "il2cpp_thread_current": "KpcQMqXPTyC",
  "il2cpp_thread_attach": "wfQlqYJnjlw",
  "il2cpp_thread_detach": "GWTLOixLvzu",
  "il2cpp_is_vm_thread": "PFbLAvVYEOO",
  "il2cpp_current_thread_walk_frame_stack": "NeyepssLyhg",
  "il2cpp_thread_walk_frame_stack": "OVTWtiuVQpU",
  "il2cpp_current_thread_get_top_frame": "TlMztVBIXak",
  "il2cpp_thread_get_top_frame": "IFWBbJDkHWg",
  "il2cpp_current_thread_get_frame_at": "lzeBcqX_bkv",
  "il2cpp_custom_attrs_from_method": "Q_CkRnpXXBG",
  "il2cpp_custom_attrs_from_field": "hGXWVlkeJIZ",
  "il2cpp_custom_attrs_get_attr": "yOHwHejOfP_",
  "il2cpp_custom_attrs_has_attr": "cVfWCyBOPiV",
  "il2cpp_custom_attrs_construct": "qIyTZRi_JwY",
  "il2cpp_custom_attrs_free": "AdDNIr_cuqH",
  "il2cpp_class_set_userdata": "KpUwMeaRPox",
  "il2cpp_class_get_userdata_offset": "fBJiqBydGti",
  "il2cpp_set_default_thread_affinity": "JyAkmldyHMH",
  "il2cpp_unity_set_android_network_up_state_func": "tFyBTOMuGEZ",
  "il2cpp_image_get_name": "DmehZFuDzSF",
  "il2cpp_image_get_filename": "ioEIODWZPjv",
  "il2cpp_image_get_entry_point": "yNlDiXvRPem",
  "il2cpp_image_get_class_count": "sifRxuSlVbo",
  "il2cpp_image_get_class": "bHPWubQLECt",
  "il2cpp_capture_memory_snapshot": "ymhxiTiFDyq",
  "il2cpp_free_captured_memory_snapshot": "zkIPVBIdKdX",
  "il2cpp_set_find_plugin_callback": "XsgyDBiuPZK",
  "il2cpp_register_log_callback": "xnvOpvkWLek",
  "il2cpp_debugger_set_agent_options": "CWqZk_BBtVa",
  "il2cpp_is_debugger_attached": "CxqmGPzYlqd",
  "il2cpp_register_debugger_agent_transport": "fHgNwrfnbjq",
  "il2cpp_debug_foreach_method": "MXcUPZCZSHv",
  "il2cpp_debug_get_method_info": "PRJfPMluxxw",
  "il2cpp_unity_install_unitytls_interface": "ffeKdkKmLro",
  "il2cpp_custom_attrs_from_class": "WFYjFmEfJqI"
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
