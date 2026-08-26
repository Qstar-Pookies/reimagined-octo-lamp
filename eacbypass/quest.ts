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
  "il2cpp_init": "qhTjsalgewW",
  "il2cpp_init_utf16": "JtrJrNQgdVT",
  "il2cpp_shutdown": "aYvQHsaVNDq",
  "il2cpp_set_config_dir": "pOLRVNvdziK",
  "il2cpp_set_data_dir": "yUiNOOyToIe",
  "il2cpp_set_temp_dir": "t_GqTuJFkur",
  "il2cpp_set_commandline_arguments": "jCpDwcbrDqq",
  "il2cpp_set_commandline_arguments_utf16": "gZfE_uYRfgy",
  "il2cpp_set_config_utf16": "gwGhioOru_W",
  "il2cpp_set_config": "J_twvJGWsio",
  "il2cpp_set_memory_callbacks": "ZKNDfRqNbST",
  "il2cpp_memory_pool_set_region_size": "LtyMFDdfwj_",
  "il2cpp_memory_pool_get_region_size": "bvCHSYMfVyf",
  "il2cpp_get_corlib": "WTFtNr_sFOz",
  "il2cpp_add_internal_call": "mjiYTYcIJIW",
  "il2cpp_resolve_icall": "aeTyPqvSmhg",
  "il2cpp_class_is_assignable_from": "qGcgmeKZlcT",
  "il2cpp_class_is_subclass_of": "TjQaS_hPf_P",
  "il2cpp_class_has_parent": "hYWaOzjgXQm",
  "il2cpp_class_from_il2cpp_type": "frBHocxxytJ",
  "il2cpp_class_from_name": "WoYYfnIfuju",
  "il2cpp_class_from_system_type": "mmnxAuofuGG",
  "il2cpp_class_get_element_class": "ihahbkRigkd",
  "il2cpp_class_get_events": "lyueFqEjtHc",
  "il2cpp_class_get_fields": "dPWrpoBwgBo",
  "il2cpp_class_get_nested_types": "tIA_SVktMoz",
  "il2cpp_class_get_interfaces": "hUpJNVnJZRM",
  "il2cpp_class_get_properties": "oUajsHJrVvF",
  "il2cpp_class_get_property_from_name": "_kDZNmoYlDk",
  "il2cpp_class_get_field_from_name": "CwclQkZdXhS",
  "il2cpp_class_get_methods": "srTFRRzigPX",
  "il2cpp_class_get_method_from_name": "kSjzSwRveqp",
  "il2cpp_alloc": "OgiugqyzeWP",
  "il2cpp_free": "ZxdNHdfXQMU",
  "il2cpp_array_class_get": "UvNMXlatWRY",
  "il2cpp_array_length": "hZkhSDxoZAv",
  "il2cpp_array_get_byte_length": "yrKGjRJdfai",
  "il2cpp_array_new": "fOYKXVrmbPr",
  "il2cpp_array_new_specific": "tHBGZzxTMFG",
  "il2cpp_array_new_full": "sNfCSO_htsp",
  "il2cpp_bounded_array_class_get": "MdylGVbvWwJ",
  "il2cpp_array_element_size": "W_IzFvHAdoh",
  "il2cpp_assembly_get_image": "egtvdBC_FCf",
  "il2cpp_class_for_each": "DiyFkOjKYPb",
  "il2cpp_class_enum_basetype": "FwSPztzc_hC",
  "il2cpp_class_is_inited": "rWYqkwbcsks",
  "il2cpp_class_is_generic": "NeffQIbySCA",
  "il2cpp_class_is_inflated": "YuOExhOQdia",
  "il2cpp_class_get_type_token": "mDAMugrcBgR",
  "il2cpp_class_has_attribute": "yqziPcQEoSn",
  "il2cpp_class_has_references": "RAMcUvpRZsF",
  "il2cpp_class_is_enum": "JuZaVWfTalQ",
  "il2cpp_class_get_image": "SzegCeegvOi",
  "il2cpp_class_get_assemblyname": "cAmdafcJeOE",
  "il2cpp_class_get_rank": "_HrR_OAOAQl",
  "il2cpp_class_get_data_size": "QR_d_OOxzPy",
  "il2cpp_class_get_static_field_data": "bdtKjIKVjvy",
  "il2cpp_stats_dump_to_file": "aFZbJqJFKcU",
  "il2cpp_stats_get_value": "NCJuMbRhTQV",
  "il2cpp_domain_get": "OPnCDzWYZDx",
  "il2cpp_domain_assembly_open": "BrcxQFqjinz",
  "il2cpp_domain_get_assemblies": "XhfslXlDaTk",
  "il2cpp_raise_exception": "SgkWMFiKLAo",
  "il2cpp_exception_from_name_msg": "ZfvWdhySkHt",
  "il2cpp_class_get_name": "TexAAAxUVOw",
  "il2cpp_type_get_name_chunked": "iuAUCvsTSlt",
  "il2cpp_class_get_namespace": "Mqy_XsMRnTB",
  "il2cpp_class_get_parent": "tdLBCQUWsgM",
  "il2cpp_class_get_declaring_type": "vc_kfowRtbF",
  "il2cpp_class_instance_size": "XHBKFyZrxmi",
  "il2cpp_class_num_fields": "nDsRrvqBJOC",
  "il2cpp_class_is_valuetype": "FYUSdIkSCnz",
  "il2cpp_class_value_size": "HRyPUKvhBrR",
  "il2cpp_class_is_blittable": "eFuBRgwCAJO",
  "il2cpp_class_get_flags": "esGcxiNRsIR",
  "il2cpp_class_is_abstract": "dxzwDL_GXTx",
  "il2cpp_class_is_interface": "oQHCksHLjDo",
  "il2cpp_class_array_element_size": "wmyVwTLFJba",
  "il2cpp_class_from_type": "yy_ACMmDRFX",
  "il2cpp_class_get_type": "fmDUhhMmtPx",
  "il2cpp_field_static_get_value": "iXkZWlLZLtQ",
  "il2cpp_field_static_set_value": "dWYxcPHVsFz",
  "il2cpp_field_set_value_object": "IOlmJDCzCtT",
  "il2cpp_field_is_literal": "SzSuuYavseV",
  "il2cpp_gc_collect": "TxCcQiOaXVd",
  "il2cpp_gc_collect_a_little": "FOKXXL_aCCa",
  "il2cpp_gc_start_incremental_collection": "jcSfFGalgcp",
  "il2cpp_gc_disable": "RWhbPHCwSuX",
  "il2cpp_gc_enable": "vvnxGktumHA",
  "il2cpp_gc_is_disabled": "AeBKSXvQwgU",
  "il2cpp_gc_set_mode": "AkXuaYiNMbI",
  "il2cpp_gc_get_max_time_slice_ns": "AhsXNJRBRjk",
  "il2cpp_gc_set_max_time_slice_ns": "UkxwQSiPkGU",
  "il2cpp_gc_is_incremental": "dNjkYo_cFEN",
  "il2cpp_gc_get_used_size": "DfqkdpIKYDA",
  "il2cpp_gc_get_heap_size": "KNrIBhcjgoM",
  "il2cpp_get_exception_argument_null": "xcLOJdlZstO",
  "il2cpp_format_exception": "UDxGJYjibgF",
  "il2cpp_format_stack_trace": "gsBTunneapt",
  "il2cpp_unhandled_exception": "PdULqXhvDKw",
  "il2cpp_native_stack_trace": "oeIRiCTTsrq",
  "il2cpp_field_get_flags": "FIAOTrAjyuC",
  "il2cpp_field_get_from_reflection": "jxv_lrvalkO",
  "il2cpp_field_get_name": "mPLWseUlDJY",
  "il2cpp_field_get_parent": "KwIexutNpju",
  "il2cpp_field_get_object": "kThyEMjQlgk",
  "il2cpp_field_get_offset": "AzfjdshIHVn",
  "il2cpp_field_get_type": "qvCoBaiKOGk",
  "il2cpp_field_get_value": "RaPdmSPHWNJ",
  "il2cpp_field_get_value_object": "VIVYTJlPNni",
  "il2cpp_field_has_attribute": "AcrEJhgcsxw",
  "il2cpp_field_set_value": "qYYMpCTplhH",
  "il2cpp_offset_of_array_length_in_array_object_header": "B_TfUeQJKqA",
  "il2cpp_offset_of_array_bounds_in_array_object_header": "XdmWTCEsUiP",
  "il2cpp_allocation_granularity": "SOdIfDjKZfR",
  "il2cpp_unity_liveness_allocate_struct": "iiWlxtvPKMj",
  "il2cpp_unity_liveness_calculation_from_root": "SDisEPBlpCJ",
  "il2cpp_unity_liveness_calculation_from_statics": "oZuejVaexvV",
  "il2cpp_unity_liveness_finalize": "kLnABfOAxNI",
  "il2cpp_unity_liveness_free_struct": "RfgP_LIjAhP",
  "il2cpp_method_get_return_type": "rRUWTAHGZAJ",
  "il2cpp_method_get_declaring_type": "_BGQDzTFVqD",
  "il2cpp_method_get_name": "SejhVLVoBRz",
  "il2cpp_method_get_from_reflection": "tmiJmsZNWXq",
  "il2cpp_method_get_object": "EkJShHgVirF",
  "il2cpp_method_is_generic": "Wdyqdwfgyal",
  "il2cpp_method_is_inflated": "tmnKcFomoPk",
  "il2cpp_method_is_instance": "yVRCRa_fFoG",
  "il2cpp_gc_wbarrier_set_field": "GXTkZWIICxt",
  "il2cpp_gc_has_strict_wbarriers": "WQcqBsFZEId",
  "il2cpp_gc_set_external_allocation_tracker": "PRFoxCozTgs",
  "il2cpp_gc_set_external_wbarrier_tracker": "yKNYNtVGQfm",
  "il2cpp_gc_foreach_heap": "GrFntnXHzTe",
  "il2cpp_stop_gc_world": "cazlkcOftwE",
  "il2cpp_start_gc_world": "_VmOGvujLRf",
  "il2cpp_gc_alloc_fixed": "BvKtwxcFUzj",
  "il2cpp_gc_free_fixed": "CIpuHyksmXO",
  "il2cpp_gchandle_new": "IZcLUNCFqlH",
  "il2cpp_gchandle_new_weakref": "TFA_wKbGxgo",
  "il2cpp_gchandle_get_target": "mEjEurq_ARf",
  "il2cpp_gchandle_free": "aXDgDa_BYZG",
  "il2cpp_gchandle_foreach_get_target": "NnTUGyexurR",
  "il2cpp_object_header_size": "UATpeIqRSSB",
  "il2cpp_array_object_header_size": "hITsaSvoFol",
  "il2cpp_object_unbox": "VEutlmeO_pE",
  "il2cpp_value_box": "KHkzzLfqChr",
  "il2cpp_monitor_enter": "FrwLuSnVinb",
  "il2cpp_monitor_try_enter": "qRjNCwcWzeJ",
  "il2cpp_monitor_exit": "WfDbVrOEsNv",
  "il2cpp_monitor_pulse": "UmZqkcDTBhZ",
  "il2cpp_monitor_pulse_all": "svwylZXOUKK",
  "il2cpp_monitor_wait": "qXhrdGMssMY",
  "il2cpp_monitor_try_wait": "rT_CYHYLiGV",
  "il2cpp_runtime_invoke": "mojfUgBkxip",
  "il2cpp_runtime_invoke_convert_args": "fvZwfWrpYrF",
  "il2cpp_runtime_class_init": "CVGuihjTVbB",
  "il2cpp_runtime_object_init": "YRHbbKD_IoZ",
  "il2cpp_runtime_object_init_exception": "Wiool_oXRGw",
  "il2cpp_runtime_unhandled_exception_policy_set": "SyvEHZl_THS",
  "il2cpp_string_length": "Blwg_ajgALS",
  "il2cpp_method_get_param_count": "TzaTametHdr",
  "il2cpp_method_get_param": "tczOGhfrgJo",
  "il2cpp_method_get_class": "sPOgeUhcBJd",
  "il2cpp_method_has_attribute": "acCkftgjGiu",
  "il2cpp_method_get_flags": "kbIOgVMthsE",
  "il2cpp_method_get_token": "CGvzFDyKziV",
  "il2cpp_method_get_param_name": "aOvWjjtOtTE",
  "il2cpp_property_get_flags": "R_nfjqmw_lC",
  "il2cpp_property_get_get_method": "LLapOPrYtM_",
  "il2cpp_property_get_set_method": "UJDDWBvpXWZ",
  "il2cpp_property_get_name": "pPdvbLdFscm",
  "il2cpp_property_get_parent": "lQJXVoFvYdr",
  "il2cpp_object_get_class": "SqRSyibDjwv",
  "il2cpp_object_get_size": "ylMMmtsfKFQ",
  "il2cpp_object_get_virtual_method": "dEnqMlqXOmR",
  "il2cpp_object_new": "rVmZXeWHnuc",
  "il2cpp_thread_get_frame_at": "pAkePZedNZw",
  "il2cpp_current_thread_get_stack_depth": "_GsnFpUbEiW",
  "il2cpp_thread_get_stack_depth": "iFOkITWotfy",
  "il2cpp_override_stack_backtrace": "XiNHGG_AMgq",
  "il2cpp_type_get_object": "qXQodiUqyma",
  "il2cpp_type_get_type": "tWwlmQDBtqm",
  "il2cpp_type_get_class_or_element_class": "TJQSReDHBHT",
  "il2cpp_type_get_name": "UUaYSYExXBD",
  "il2cpp_type_is_byref": "iLwQlAICkyK",
  "il2cpp_type_get_attrs": "RYXPkcYHiqV",
  "il2cpp_type_equals": "yT_SZ_UeTjw",
  "il2cpp_type_get_assembly_qualified_name": "HBjQkcEjHJA",
  "il2cpp_type_get_reflection_name": "JFBfnRFWJDA",
  "il2cpp_type_is_static": "LOkmJIMoppr",
  "il2cpp_type_is_pointer_type": "zcFPnoJDLXM",
  "il2cpp_image_get_assembly": "KnWNxruDNEF",
  "il2cpp_string_chars": "tnEJknuqiuW",
  "il2cpp_string_new": "zSMzqAxLP_l",
  "il2cpp_string_new_len": "meSgZNIAuWl",
  "il2cpp_string_new_utf16": "XmqgLhhaRPM",
  "il2cpp_string_new_wrapper": "aiZOKiIdAhY",
  "il2cpp_string_intern": "MjaaNpMfAKc",
  "il2cpp_string_is_interned": "yHVzPgJp_FJ",
  "il2cpp_thread_current": "IoSpkhFKXGg",
  "il2cpp_thread_attach": "qbBgyyHgfPe",
  "il2cpp_thread_detach": "HTVvRetglc_",
  "il2cpp_is_vm_thread": "wTjvHVuPPNZ",
  "il2cpp_current_thread_walk_frame_stack": "oHNomOr_Jpo",
  "il2cpp_thread_walk_frame_stack": "pZfSfqMuUih",
  "il2cpp_current_thread_get_top_frame": "GzEgV_Klz_e",
  "il2cpp_thread_get_top_frame": "JEhYaXEBJfd",
  "il2cpp_current_thread_get_frame_at": "ZJTmZYYSpiF",
  "il2cpp_custom_attrs_from_method": "YwzeCTXFRQV",
  "il2cpp_custom_attrs_from_field": "XxiFcYfqnZz",
  "il2cpp_custom_attrs_get_attr": "eqcNCfXpune",
  "il2cpp_custom_attrs_has_attr": "OVumSOR_ffH",
  "il2cpp_custom_attrs_construct": "EkqDFeza_UG",
  "il2cpp_custom_attrs_free": "DnzHzTTxWEg",
  "il2cpp_class_set_userdata": "dB_LtstDpaZ",
  "il2cpp_class_get_userdata_offset": "DFfAZvufhJJ",
  "il2cpp_set_default_thread_affinity": "cLoism_IaCk",
  "il2cpp_unity_set_android_network_up_state_func": "BnJAhLYESbb",
  "il2cpp_image_get_name": "spRtWTQUbQu",
  "il2cpp_image_get_filename": "lUZnuKDpYIq",
  "il2cpp_image_get_entry_point": "usxivjEjecU",
  "il2cpp_image_get_class_count": "HqnUtNFEatJ",
  "il2cpp_image_get_class": "sSXvxQLyXtv",
  "il2cpp_capture_memory_snapshot": "SzkbOvkpgCS",
  "il2cpp_free_captured_memory_snapshot": "cftJuTzwhQj",
  "il2cpp_set_find_plugin_callback": "UjOjJMGdWWt",
  "il2cpp_register_log_callback": "NX_YdRcPZhM",
  "il2cpp_debugger_set_agent_options": "zAjKbCgVlxv",
  "il2cpp_is_debugger_attached": "bcwP_CJUfBL",
  "il2cpp_register_debugger_agent_transport": "WQEUrmrUlcf",
  "il2cpp_debug_foreach_method": "CJSOqcuvMYJ",
  "il2cpp_debug_get_method_info": "GflUENahyui",
  "il2cpp_unity_install_unitytls_interface": "HAJxfXyEMOg",
  "il2cpp_custom_attrs_from_class": "ZcxrfKS_gWa"
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
