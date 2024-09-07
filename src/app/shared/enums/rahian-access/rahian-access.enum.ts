export enum RahianAccess
{
OK = "Ok",
NO_ACCESS = "No.Access",
ABPIDENTITY_ROLES = "AbpIdentity.Roles",
ABPIDENTITY_ROLES_CREATE = "AbpIdentity.Roles.Create",
ABPIDENTITY_ROLES_UPDATE = "AbpIdentity.Roles.Update",
ABPIDENTITY_ROLES_DELETE = "AbpIdentity.Roles.Delete",
ABPIDENTITY_ROLES_MANAGEPERMISSIONS = "AbpIdentity.Roles.ManagePermissions",
ABPIDENTITY_USERS = "AbpIdentity.Users",
ABPIDENTITY_USERS_CREATE = "AbpIdentity.Users.Create",
ABPIDENTITY_USERS_UPDATE = "AbpIdentity.Users.Update",
ABPIDENTITY_USERS_DELETE = "AbpIdentity.Users.Delete",
ABPIDENTITY_USERS_CHANGEPASSWORD = "AbpIdentity.Users.ChangePassword",
ABPIDENTITY_USERS_MANAGEPERMISSIONS = "AbpIdentity.Users.ManagePermissions",
FEATUREMANAGEMENT_MANAGEHOSTFEATURES = "FeatureManagement.ManageHostFeatures",
SETTINGMANAGEMENT_EMAILING = "SettingManagement.Emailing",
SETTINGMANAGEMENT_EMAILING_TEST = "SettingManagement.Emailing.Test",
ABPTENANTMANAGEMENT_TENANTS = "AbpTenantManagement.Tenants",
ABPTENANTMANAGEMENT_TENANTS_CREATE = "AbpTenantManagement.Tenants.Create",
ABPTENANTMANAGEMENT_TENANTS_UPDATE = "AbpTenantManagement.Tenants.Update",
ABPTENANTMANAGEMENT_TENANTS_DELETE = "AbpTenantManagement.Tenants.Delete",
ABPTENANTMANAGEMENT_TENANTS_MANAGEFEATURES = "AbpTenantManagement.Tenants.ManageFeatures",
ABPTENANTMANAGEMENT_TENANTS_MANAGECONNECTIONSTRINGS = "AbpTenantManagement.Tenants.ManageConnectionStrings",
BAHARAN_FILEMANAGEMENT_FILE = "Baharan.FileManagement.File",
BAHARAN_FILEMANAGEMENT_FILE_MANAGE = "Baharan.FileManagement.File.Manage",
BAHARAN_FILEMANAGEMENT_FILE_CREATE = "Baharan.FileManagement.File.Create",
BAHARAN_FILEMANAGEMENT_FILE_UPDATE = "Baharan.FileManagement.File.Update",
BAHARAN_FILEMANAGEMENT_FILE_DELETE = "Baharan.FileManagement.File.Delete",
BAHARAN_FILEMANAGEMENT_FILE_GETDOWNLOADINFO = "Baharan.FileManagement.File.GetDownloadInfo",
BAHARAN_FILEMANAGEMENT_FILE_MOVE = "Baharan.FileManagement.File.Move",
BAHARAN_NOTIFICATIONSERVICE_NOTIFICATION = "Baharan.NotificationService.Notification",
BAHARAN_NOTIFICATIONSERVICE_NOTIFICATION_CREATE = "Baharan.NotificationService.Notification.Create",
BAHARAN_NOTIFICATIONSERVICE_NOTIFICATION_UPDATE = "Baharan.NotificationService.Notification.Update",
BAHARAN_NOTIFICATIONSERVICE_NOTIFICATION_DELETE = "Baharan.NotificationService.Notification.Delete",
RAHIAN_PERMISSIONPROCESS_CERTIFICATE_SELECTION = "Rahian.PermissionProcess.Certificate.Selection",
RAHIAN_PERMISSIONPROCESS_UTILIZATION = "Rahian.PermissionProcess.Utilization",
CERTIFICATES = "Certificates",
CERTIFICATES_ADD = "Certificates.Add", // implemented
CERTIFICATES_UPDATE = "Certificates.Update",
CERTIFICATES_DELETE = "Certificates.Delete",
CERTIFICATES_READ = "Certificates.Read", // implemented
CERTIFICATES_DEACTIVE = "Certificates.DeActive", // implemented
CERTIFICATES_REVISE = "Certificates.Revise", // implemented
CERTIFICATES_READLOGS = "Certificates.ReadLogs",
CERTIFICATES_ACTIVE = "Certificates.Active", // implemented
ORGANIZATIONUNITS = "OrganizationUnits",
ORGANIZATIONUNITS_ADD = "OrganizationUnits.Add", // implemented
ORGANIZATIONUNITS_UPDATE = "OrganizationUnits.Update", // implemented
ORGANIZATIONUNITS_DELETE = "OrganizationUnits.Delete",
ORGANIZATIONUNITS_READ = "OrganizationUnits.Read", // implemented
ORGANIZATIONUNITROLES = "OrganizationUnitRoles",
ORGANIZATIONUNITROLES_ADD = "OrganizationUnitRoles.Add",// implemented
ORGANIZATIONUNITROLES_UPDATE = "OrganizationUnitRoles.Update",
ORGANIZATIONUNITROLES_DELETE = "OrganizationUnitRoles.Delete",
ORGANIZATIONUNITROLES_READ = "OrganizationUnitRoles.Read",
PLANS = "Plans",
PLANS_ADD = "Plans.Add",// implemented
PLANS_UPDATE = "Plans.Update",// implemented
PLANS_DELETE = "Plans.Delete",
PLANS_READ = "Plans.Read",
PLANS_RELEASE = "Plans.Release",// implemented
PLANS_FINISH = "Plans.Finish",// implemented
PLANS_CANCEL = "Plans.Cancel", // implemented
PLANS_ACTIVATE = "Plans.Activate",
RAHIAN_PLACES = "Rahian.Places",
RAHIAN_PLACES_ADD = "Rahian.Places.Add",
RAHIAN_PLACES_UPDATE = "Rahian.Places.Update",
RAHIAN_PLACES_DELETE = "Rahian.Places.Delete",
RAHIAN_PLACES_READ = "Rahian.Places.Read",
RAHIAN_PLACES_PLACEDETAILACCOMODATIONS = "Rahian.Places.PlaceDetailAccomodations",
RAHIAN_PLACES_PLACEDETAILACCOMODATIONS_ADD = "Rahian.Places.PlaceDetailAccomodations.Add",
RAHIAN_PLACES_PLACEDETAILACCOMODATIONS_UPDATE = "Rahian.Places.PlaceDetailAccomodations.Update",
RAHIAN_PLACES_PLACEDETAILACCOMODATIONS_DELETE = "Rahian.Places.PlaceDetailAccomodations.Delete",
RAHIAN_PLACES_PLACEDETAILACCOMODATIONS_READ = "Rahian.Places.PlaceDetailAccomodations.Read",
RAHIAN_PLACES_PLACEDETAILKITCHENS = "Rahian.Places.PlaceDetailKitchens",
RAHIAN_PLACES_PLACEDETAILKITCHENS_ADD = "Rahian.Places.PlaceDetailKitchens.Add",
RAHIAN_PLACES_PLACEDETAILKITCHENS_UPDATE = "Rahian.Places.PlaceDetailKitchens.Update",
RAHIAN_PLACES_PLACEDETAILKITCHENS_DELETE = "Rahian.Places.PlaceDetailKitchens.Delete",
RAHIAN_PLACES_PLACEDETAILKITCHENS_READ = "Rahian.Places.PlaceDetailKitchens.Read",
RAHIAN_PLACES_PLACEDETAILMEMORIALS = "Rahian.Places.PlaceDetailMemorials",
RAHIAN_PLACES_PLACEDETAILMEMORIALS_ADD = "Rahian.Places.PlaceDetailMemorials.Add",
RAHIAN_PLACES_PLACEDETAILMEMORIALS_UPDATE = "Rahian.Places.PlaceDetailMemorials.Update",
RAHIAN_PLACES_PLACEDETAILMEMORIALS_DELETE = "Rahian.Places.PlaceDetailMemorials.Delete",
RAHIAN_PLACES_PLACEDETAILMEMORIALS_READ = "Rahian.Places.PlaceDetailMemorials.Read",
SELECTIONS = "Selections",
SELECTIONS_ADD = "Selections.Add",
SELECTIONS_UPDATE = "Selections.Update",
SELECTIONS_DELETE = "Selections.Delete",
SELECTIONS_READ = "Selections.Read",
SELECTIONS_ORGANIZATION_UNIT_ROLES = "Selections.OrganizationUnitRoles",
UTILIZATIONS = "Utilizations",
UTILIZATIONS_ADD = "Utilizations.Add", // implemented
UTILIZATIONS_UPDATE = "Utilizations.Update",
UTILIZATIONS_DELETE = "Utilizations.Delete",
UTILIZATIONS_READ = "Utilizations.Read",
UTILIZATIONS_RELEASE = "Utilizations.Release",
RAHIAN_BASEINFORMATIONHEADERS = "Rahian.BaseInformationHeaders",
RAHIAN_BASEINFORMATIONHEADERS_READ = "Rahian.BaseInformationHeaders.Read",
RAHIAN_BASEINFORMATIONHEADERS_BASEINFORMATIONS_ADD = "Rahian.BaseInformationHeaders.BaseInformations.Add",
RAHIAN_BASEINFORMATIONHEADERS_BASEINFORMATIONS_UPDATE = "Rahian.BaseInformationHeaders.BaseInformations.Update",
RAHIAN_BASEINFORMATIONHEADERS_BASEINFORMATIONS_DELETE = "Rahian.BaseInformationHeaders.BaseInformations.Delete",
RAHIAN_BASEINFORMATIONHEADERS_BASEINFORMATIONS_READ = "Rahian.BaseInformationHeaders.BaseInformations.Read",
RAHIAN_BASEINFORMATIONHEADERS_BASEINFORMATIONS_RELATIONWITHBASEINFOTMATION = "Rahian.BaseInformationHeaders.BaseInformations.RelationWithBaseInfotmation",
RAHIAN_BASEINFORMATIONHEADERS_BASEINFORMATIONS_RELATIONWITHPROCESS = "Rahian.BaseInformationHeaders.BaseInformations.RelationWithProcess",
BASEPERSONELS = "BasePersonels",
BASEPERSONELS_ADD = "BasePersonels.Add",
BASEPERSONELS_UPDATE = "BasePersonels.Update",  // implemented
BASEPERSONELS_DELETE = "BasePersonels.Delete",
BASEPERSONELS_READ = "BasePersonels.Read",
BASEPERSONELS_TRAININGHISTORIES = "BasePersonels.TrainingHistories",
BASEPERSONELS_TRAININGHISTORIES_ADD = "BasePersonels.TrainingHistories.Add", //implemented
BASEPERSONELS_TRAININGHISTORIES_UPDATE = "BasePersonels.TrainingHistories.Update",
BASEPERSONELS_TRAININGHISTORIES_DELETE = "BasePersonels.TrainingHistories.Delete", //implemented
BASEPERSONELS_TRAININGHISTORIES_READ = "BasePersonels.TrainingHistories.Read",
BASEPERSONELS_TEACHINGHISTORIES = "BasePersonels.TeachingHistories",
BASEPERSONELS_TEACHINGHISTORIES_ADD = "BasePersonels.TeachingHistories.Add", //implemented
BASEPERSONELS_TEACHINGHISTORIES_UPDATE = "BasePersonels.TeachingHistories.Update",
BASEPERSONELS_TEACHINGHISTORIES_DELETE = "BasePersonels.TeachingHistories.Delete", //implemented
BASEPERSONELS_TEACHINGHISTORIES_READ = "BasePersonels.TeachingHistories.Read",
BASEPERSONELS_SPECIALTYHISTORIES = "BasePersonels.SpecialtyHistories",
BASEPERSONELS_SPECIALTYHISTORIES_ADD = "BasePersonels.SpecialtyHistories.Add", //implemented
BASEPERSONELS_SPECIALTYHISTORIES_UPDATE = "BasePersonels.SpecialtyHistories.Update",
BASEPERSONELS_SPECIALTYHISTORIES_DELETE = "BasePersonels.SpecialtyHistories.Delete", //implemented
BASEPERSONELS_SPECIALTYHISTORIES_READ = "BasePersonels.SpecialtyHistories.Read",
BASEPERSONELS_RESEARCHHISTORIES = "BasePersonels.ResearchHistories",
BASEPERSONELS_RESEARCHHISTORIES_ADD = "BasePersonels.ResearchHistories.Add", //implemented
BASEPERSONELS_RESEARCHHISTORIES_UPDATE = "BasePersonels.ResearchHistories.Update",
BASEPERSONELS_RESEARCHHISTORIES_DELETE = "BasePersonels.ResearchHistories.Delete", //implemented
BASEPERSONELS_RESEARCHHISTORIES_READ = "BasePersonels.ResearchHistories.Read",
BASEPERSONELS_PHENOMENAHISTORIES = "BasePersonels.PhenomenaHistories",
BASEPERSONELS_PHENOMENAHISTORIES_ADD = "BasePersonels.PhenomenaHistories.Add", //implemented
BASEPERSONELS_PHENOMENAHISTORIES_UPDATE = "BasePersonels.PhenomenaHistories.Update",
BASEPERSONELS_PHENOMENAHISTORIES_DELETE = "BasePersonels.PhenomenaHistories.Delete", //implemented
BASEPERSONELS_PHENOMENAHISTORIES_READ = "BasePersonels.PhenomenaHistories.Read",
BASEPERSONELS_NARRATIONHISTORIES = "BasePersonels.NarrationHistories",
BASEPERSONELS_NARRATIONHISTORIES_ADD = "BasePersonels.NarrationHistories.Add", //implemented
BASEPERSONELS_NARRATIONHISTORIES_UPDATE = "BasePersonels.NarrationHistories.Update",
BASEPERSONELS_NARRATIONHISTORIES_DELETE = "BasePersonels.NarrationHistories.Delete", //implemented
BASEPERSONELS_NARRATIONHISTORIES_READ = "BasePersonels.NarrationHistories.Read",
BASEPERSONELS_MARTIALHISTORIES = "BasePersonels.MartialHistories",
BASEPERSONELS_MARTIALHISTORIES_ADD = "BasePersonels.MartialHistories.Add", //implemented
BASEPERSONELS_MARTIALHISTORIES_UPDATE = "BasePersonels.MartialHistories.Update",
BASEPERSONELS_MARTIALHISTORIES_DELETE = "BasePersonels.MartialHistories.Delete", //implemented
BASEPERSONELS_MARTIALHISTORIES_READ = "BasePersonels.MartialHistories.Read",
BASEPERSONELS_BANKINFORMATIONS = "BasePersonels.BankInformations",
BASEPERSONELS_BANKINFORMATIONS_ADD = "BasePersonels.BankInformations.Add", //implemented
BASEPERSONELS_BANKINFORMATIONS_UPDATE = "BasePersonels.BankInformations.Update",
BASEPERSONELS_BANKINFORMATIONS_DELETE = "BasePersonels.BankInformations.Delete", //implemented
BASEPERSONELS_BANKINFORMATIONS_READ = "BasePersonels.BankInformations.Read",
BASEPERSONELS_OWN_ADD = "BasePersonels.Own.Add",
BASEPERSONELS_OWN_UPDATE = "BasePersonels.Own.Update",
BASEPERSONELS_OWN_DELETE = "BasePersonels.Own.Delete",
BASEPERSONELS_OWN_READ = "BasePersonels.Own.Read",
BASEPERSONELS_OWN_TRAININGHISTORIES = "BasePersonels.Own.TrainingHistories",
BASEPERSONELS_OWN_TRAININGHISTORIES_ADD = "BasePersonels.Own.TrainingHistories.Add",
BASEPERSONELS_OWN_TRAININGHISTORIES_UPDATE = "BasePersonels.Own.TrainingHistories.Update",
BASEPERSONELS_OWN_TRAININGHISTORIES_DELETE = "BasePersonels.Own.TrainingHistories.Delete",
BASEPERSONELS_OWN_TRAININGHISTORIES_READ = "BasePersonels.Own.TrainingHistories.Read",
BASEPERSONELS_OWN_TEACHINGHISTORIES = "BasePersonels.Own.TeachingHistories",
BASEPERSONELS_OWN_TEACHINGHISTORIES_ADD = "BasePersonels.Own.TeachingHistories.Add",
BASEPERSONELS_OWN_TEACHINGHISTORIES_UPDATE = "BasePersonels.Own.TeachingHistories.Update",
BASEPERSONELS_OWN_TEACHINGHISTORIES_DELETE = "BasePersonels.Own.TeachingHistories.Delete",
BASEPERSONELS_OWN_TEACHINGHISTORIES_READ = "BasePersonels.Own.TeachingHistories.Read",
BASEPERSONELS_OWN_SPECIALTYHISTORIES = "BasePersonels.Own.SpecialtyHistories",
BASEPERSONELS_OWN_SPECIALTYHISTORIES_ADD = "BasePersonels.Own.SpecialtyHistories.Add",
BASEPERSONELS_OWN_SPECIALTYHISTORIES_UPDATE = "BasePersonels.Own.SpecialtyHistories.Update",
BASEPERSONELS_OWN_SPECIALTYHISTORIES_DELETE = "BasePersonels.Own.SpecialtyHistories.Delete",
BASEPERSONELS_OWN_SPECIALTYHISTORIES_READ = "BasePersonels.Own.SpecialtyHistories.Read",
BASEPERSONELS_OWN_RESEARCHHISTORIES = "BasePersonels.Own.ResearchHistories",
BASEPERSONELS_OWN_RESEARCHHISTORIES_ADD = "BasePersonels.Own.ResearchHistories.Add",
BASEPERSONELS_OWN_RESEARCHHISTORIES_UPDATE = "BasePersonels.Own.ResearchHistories.Update",
BASEPERSONELS_OWN_RESEARCHHISTORIES_DELETE = "BasePersonels.Own.ResearchHistories.Delete",
BASEPERSONELS_OWN_RESEARCHHISTORIES_READ = "BasePersonels.Own.ResearchHistories.Read",
BASEPERSONELS_OWN_PHENOMENAHISTORIES = "BasePersonels.Own.PhenomenaHistories",
BASEPERSONELS_OWN_PHENOMENAHISTORIES_ADD = "BasePersonels.Own.PhenomenaHistories.Add",
BASEPERSONELS_OWN_PHENOMENAHISTORIES_UPDATE = "BasePersonels.Own.PhenomenaHistories.Update",
BASEPERSONELS_OWN_PHENOMENAHISTORIES_DELETE = "BasePersonels.Own.PhenomenaHistories.Delete",
BASEPERSONELS_OWN_PHENOMENAHISTORIES_READ = "BasePersonels.Own.PhenomenaHistories.Read",
BASEPERSONELS_OWN_NARRATIONHISTORIES = "BasePersonels.Own.NarrationHistories",
BASEPERSONELS_OWN_NARRATIONHISTORIES_ADD = "BasePersonels.Own.NarrationHistories.Add",
BASEPERSONELS_OWN_NARRATIONHISTORIES_UPDATE = "BasePersonels.Own.NarrationHistories.Update",
BASEPERSONELS_OWN_NARRATIONHISTORIES_DELETE = "BasePersonels.Own.NarrationHistories.Delete",
BASEPERSONELS_OWN_NARRATIONHISTORIES_READ = "BasePersonels.Own.NarrationHistories.Read",
BASEPERSONELS_OWN_MARTIALHISTORIES = "BasePersonels.Own.MartialHistories",
BASEPERSONELS_OWN_MARTIALHISTORIES_ADD = "BasePersonels.Own.MartialHistories.Add",
BASEPERSONELS_OWN_MARTIALHISTORIES_UPDATE = "BasePersonels.Own.MartialHistories.Update",
BASEPERSONELS_OWN_MARTIALHISTORIES_DELETE = "BasePersonels.Own.MartialHistories.Delete",
BASEPERSONELS_OWN_MARTIALHISTORIES_READ = "BasePersonels.Own.MartialHistories.Read",
BASEPERSONELS_OWN_BANKINFORMATIONS = "BasePersonels.Own.BankInformations",
BASEPERSONELS_OWN_BANKINFORMATIONS_ADD = "BasePersonels.Own.BankInformations.Add",
BASEPERSONELS_OWN_BANKINFORMATIONS_UPDATE = "BasePersonels.Own.BankInformations.Update",
BASEPERSONELS_OWN_BANKINFORMATIONS_DELETE = "BasePersonels.Own.BankInformations.Delete",
BASEPERSONELS_OWN_BANKINFORMATIONS_READ = "BasePersonels.Own.BankInformations.Read",
DIFFUSIONS = "Diffusions",
DIFFUSIONS_ADD = "Diffusions.Add", //implemented
DIFFUSIONS_UPDATE = "Diffusions.Update",
DIFFUSIONS_DELETE = "Diffusions.Delete",
DIFFUSIONS_READ = "Diffusions.Read",
SELECTIONAPPLICANTS = "SelectionApplicants",
SELECTIONAPPLICANTS_ADD = "SelectionApplicants.Add",
SELECTIONAPPLICANTS_UPDATE = "SelectionApplicants.Update",
SELECTIONAPPLICANTS_DELETE = "SelectionApplicants.Delete",
SELECTIONAPPLICANTS_READ = "SelectionApplicants.Read",
SELECTIONAPPLICANTS_ADDRESULT = "SelectionApplicants.AddResult", //implemented
SELECTIONAPPLICANTS_READDETAILS = "SelectionApplicants.ReadDetails",
SELECTIONAPPLICANTS_ADDGROUPINQUIRY = "SelectionApplicants.AddGroupInquiry",
SELECTIONAPPLICANTS_APPEAL = "SelectionApplicants.Appeal",
SELECTIONAPPLICANTS_SHOW_LOGS = "SelectionApplicants.ShowLogs",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTDEFECTS = "SelectionApplicants.SelectionApplicantDefects", //implemented
SELECTIONAPPLICANTS_SELECTIONAPPLICANTDEFECTS_ADD = "SelectionApplicants.SelectionApplicantDefects.Add", //implemented
SELECTIONAPPLICANTS_SELECTIONAPPLICANTDEFECTS_UPDATE = "SelectionApplicants.SelectionApplicantDefects.Update",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTDEFECTS_DELETE = "SelectionApplicants.SelectionApplicantDefects.Delete",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTDEFECTS_READ = "SelectionApplicants.SelectionApplicantDefects.Read",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTDEFECTS_ADDRESULT = "SelectionApplicants.SelectionApplicantDefects.AddResult",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINTERVIEWDIFFUSIONS = "SelectionApplicants.SelectionApplicantInterviewDiffusions", //implemented
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINTERVIEWDIFFUSIONS_ADD = "SelectionApplicants.SelectionApplicantInterviewDiffusions.Add", //implemented
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINTERVIEWDIFFUSIONS_UPDATE = "SelectionApplicants.SelectionApplicantInterviewDiffusions.Update",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINTERVIEWDIFFUSIONS_DELETE = "SelectionApplicants.SelectionApplicantInterviewDiffusions.Delete",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINTERVIEWDIFFUSIONS_READ = "SelectionApplicants.SelectionApplicantInterviewDiffusions.Read",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINTERVIEWS = "SelectionApplicants.SelectionApplicantInterviews", //implemented
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINTERVIEWS_ADD = "SelectionApplicants.SelectionApplicantInterviews.Add", //implemented
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINTERVIEWS_UPDATE = "SelectionApplicants.SelectionApplicantInterviews.Update",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINTERVIEWS_DELETE = "SelectionApplicants.SelectionApplicantInterviews.Delete",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINTERVIEWS_READ = "SelectionApplicants.SelectionApplicantInterviews.Read",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINQUIRY = "SelectionApplicants.SelectionApplicantInquiry", //implemented
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINQUIRY_ADD = "SelectionApplicants.SelectionApplicantInquiry.Add", //implemented
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINQUIRY_UPDATE = "SelectionApplicants.SelectionApplicantInquiry.Update",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINQUIRY_DELETE = "SelectionApplicants.SelectionApplicantInquiry.Delete",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINQUIRY_READ = "SelectionApplicants.SelectionApplicantInquiry.Read",
SELECTIONAPPLICANTS_SELECTIONAPPLICANTINQUIRY_ADDRESULT = "SelectionApplicants.SelectionApplicantInquiry.AddResult",
RAHIAN_REQUESTACTION = "Rahian.RequestAction",
RAHIAN_REQUESTACTION_DEFAULT = "Rahian.RequestAction.Default",
RAHIAN_REQUESTACTION_DEFAULT_BASICPERSONELINFORMATION = "Rahian.RequestAction.Default.BasicPersonelInformation",
RAHIAN_REQUESTACTION_DEFAULT_JOBINFORMATION = "Rahian.RequestAction.Default.JobInformation",
RAHIAN_REQUESTACTION_DEFAULT_EDUCATIONALINFORMATION = "Rahian.RequestAction.Default.EducationalInformation",
RAHIAN_REQUESTACTION_DEFAULT_RELIGIONINFORMATION = "Rahian.RequestAction.Default.ReligionInformation",
RAHIAN_REQUESTACTION_DEFAULT_PHYSICALINFORMATION = "Rahian.RequestAction.Default.PhysicalInformation",
RAHIAN_REQUESTACTION_DEFAULT_MARTIALHISTORY = "Rahian.RequestAction.Default.MartialHistory",
RAHIAN_REQUESTACTION_DEFAULT_TRAININGHISTORY = "Rahian.RequestAction.Default.TrainingHistory",
RAHIAN_REQUESTACTION_DEFAULT_RESEARCHHISTORY = "Rahian.RequestAction.Default.ResearchHistory",
RAHIAN_REQUESTACTION_DEFAULT_NARRATIONHISTORY = "Rahian.RequestAction.Default.NarrationHistory",
RAHIAN_REQUESTACTION_DEFAULT_TEACHINGHISTORY = "Rahian.RequestAction.Default.TeachingHistory",
RAHIAN_REQUESTACTION_DEFAULT_SPECIALTYHISTORY = "Rahian.RequestAction.Default.SpecialtyHistory",
RAHIAN_REQUESTACTION_DEFAULT_PHENOMENAHISTORY = "Rahian.RequestAction.Default.PhenomenaHistory",
RAHIAN_REQUESTACTION_DEFAULT_BANKINFORMATION = "Rahian.RequestAction.Default.BankInformation",
BASEPERSONELS_UPDATEFIRSTNAME = "BasePersonels.UpdateFirstName",
BASEPERSONELS_UPDATELASTNAME = "BasePersonels.UpdateLastName",
BASEPERSONELS_UPDATEBIRTHDATE = "BasePersonels.UpdateBirthDate",
BASEPERSONELS_UPDATECOUNTYBASEINFORMATIONID = "BasePersonels.UpdateCountyBaseInformationId",
BASEPERSONELS_UPDATECOUNTRYBASEINFORMATIONID = "BasePersonels.UpdateCountryBaseInformationId",
BASEPERSONELS_UPDATEPROVINCEBASEINFORMATIONID = "BasePersonels.UpdateProvinceBaseInformationId",
BASEPERSONELS_UPDATECITYBASEINFORMATIONID = "BasePersonels.UpdateCityBaseInformationId",
BASEPERSONELS_UPDATEGENDER = "BasePersonels.UpdateGender",
BASEPERSONELS_UPDATECELLPHONE = "BasePersonels.UpdateCellPhone",
BASEPERSONELS_UPDATEHOMEPHONE = "BasePersonels.UpdateHomePhone",
BASEPERSONELS_UPDATENATIONALCARDIMAGE = "BasePersonels.UpdateNationalCardImage",
BASEPERSONELS_UPDATEPERSONALIMAGE = "BasePersonels.UpdatePersonalImage",
BASEPERSONELS_UPDATENATIONALCODE = "BasePersonels.UpdateNationalCode",
BASEPERSONELS_UPDATEISMARRIED = "BasePersonels.UpdateIsMarried",
BASEPERSONELS_UPDATEISINTERAL = "BasePersonels.UpdateIsInteral",
BASEPERSONELS_UPDATEEMAIL = "BasePersonels.UpdateEmail",
BASEPERSONELS_UPDATEPOSTALCODE = "BasePersonels.UpdatePostalCode",
BASEPERSONELS_UPDATEADDRESS = "BasePersonels.UpdateAddress",
BASEPERSONELS_UPDATEJOB = "BasePersonels.UpdateJob",
BASEPERSONELS_UPDATEEDUCATION = "BasePersonels.UpdateEducation",
BASEPERSONELS_UPDATERELIGION = "BasePersonels.UpdateReligion",
BASEPERSONELS_UPDATEPHYSICALSTATUS = "BasePersonels.UpdatePhysicalStatus",
RAHIAN_FEATURE_MANAGEMENT_MANAGE_HOST_FEATURES = "FeatureManagement.ManageHostFeatures",
UPDATE_FIRST_NAME = "BasePersonels.UpdateFirstName",
UPDATE_LAST_NAME = "BasePersonels.UpdateLastName",
UPDATE_BIRTH_DATE = "BasePersonels.UpdateBirthDate",
UPDATE_COUNTY_BASE_INFORMATION_ID = "BasePersonels.UpdateCountyBaseInformationId",
UPDATE_PROVINCE_BASE_INFORMATION_ID = "BasePersonels.UpdateProvinceBaseInformationId",
UPDATE_CELL_PHONE = "BasePersonels.UpdateCellPhone",
UPDATE_HOME_PHONE = "BasePersonels.UpdateHomePhone",
RAHIAN_QUESTIONNAIRES = "Rahian.Questionnaires",
RAHIAN_QUESTIONNAIRES_UPDATE = "Rahian.Questionnaires.Update",
RAHIAN_QUESTIONNAIRES_ADD = "Rahian.Questionnaires.Add",
RAHIAN_QUESTIONNAIRES_DELETE = "Rahian.Questionnaires.Delete",
RAHIAN_QUESTIONNAIRES_REFERENCE_QUESTIONNAIRE = "Rahian.Questionnaires.Refrence",
COOPERATIONS = "Cooperations",
COOPERATIONS_READ = "Cooperations.Read",
COOPERATIONS_ADD = "Cooperations.Add",
COOPERATIONS_RELEASE = "Cooperations.Release",
COOPERATIONS_UPDATE = "Cooperations.Update",
SELECTION_APPLICANTS_APPEAL_ACCESS = "SelectionApplicants.AppealAccess",
ACCOMMODATIONS="Accommodations",
ACCOMMODATIONS_ADD="Accommodations.Add",
ACCOMMODATIONS_CONVOY="Accommodations.Convoy",
ACCOMMODATIONS_SOLO="Accommodations.Solo",
ACCOMMODATIONS_Delete="Accommodations.Delete",
ACCOMMODATIONS_Read="Accommodations.Read",
ACCOMMODATIONS_Update="Accommodations.Update",
}