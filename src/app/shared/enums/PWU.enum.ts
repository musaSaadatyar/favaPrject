export enum PWU
{
  "identity" = 'AbpIdentity.Roles || AbpIdentity.Users',
  "/identity/organization" = 'OrganizationUnits',
  "/identity/role/tree" = 'AbpIdentity.Roles',
  "/identity/user-management" = 'AbpIdentity.Users',
  "/identity/user-access-management" = 'OrganizationUnitRoles',


  "planing" = 'Plans',
  "/planing/grid" = 'Plans.Read',
  "/planing/new" = 'Plans.Add',
  "/planing/edit" = 'Plans.Update',
  "/planing/edit/{id}" = 'Plans.Update',
  "sub-plan/{id}" = 'Plans.Add',
  // "Plans.Delete",
  // "Plans.Read",
  // "Plans.Release",
  // "Plans.Finish",
  // "Plans.Cancel",
  // "Plans.Activate",



  "/base-information/" = 'Rahian.BaseInformationHeaders || Rahian.Places',
  "/base-information/new" = 'Rahian.BaseInformationHeaders.BaseInformations.Add',
  "/base-information/tree" = 'Rahian.BaseInformationHeaders.Read',
  "/base-information/relations" = 'Rahian.BaseInformationHeaders.BaseInformations.RelationWithBaseInfotmation',
  "/base-information/processes-relations" = 'Rahian.BaseInformationHeaders.BaseInformations.RelationWithProcess',
  "/base-information/places" = 'Rahian.Places',
  "new/{id}/main-information" = 'Rahian.Places.Add',


  "personnel" = 'BasePersonels',
  "/personnel/grid" = 'BasePersonels.Read',
  "/personnel/edit" = 'BasePersonels.Update',
  "edit/{id}" = 'BasePersonels.Update',
  "edit/{id}/main-information" = 'BasePersonels.Update',
  "edit/{id}/training-history" = 'BasePersonels.TrainingHistories.Update',
  "edit/{id}/research-history" = 'BasePersonels.ResearchHistories.Update',
  "edit/{id}/martial-history" = 'BasePersonels.MartialHistories.Update',
"edit/{id}/narrative-history" = 'BasePersonels.NarrationHistories.Update',
  "edit/{id}/teaching-history" = 'BasePersonels.TeachingHistories.Update',
  "edit/{id}/phenomena-history" = 'BasePersonels.PhenomenaHistories.Update',
  "edit/{id}/specialties" = 'BasePersonels.SpecialtyHistories.Update',
  "edit/{id}/bank-information" = 'BasePersonels.BankInformations.Update',

  "certificate" = 'Certificates || Selections',
  "/certificate/grid" = 'Certificates.Read',
  "/certificate/form" = 'Certificates.Add',

  "certificate-program-registration" = 'Selections',
  "/certificate-program-registration/grid" = 'Selections',
  "{id}/form" = 'Selections.Add',
  "{id}/access-management" = 'Selections',
  "{id}/access-management/new" = 'Selections.Add',
  "{id}/diffusion" = 'Selections',
  "{id}/diffusion/grid" = 'Selections.Read',
  // "/certificate/details/{id}" = 'Certificates.ReadLogs',

  "{id}/election" = 'Selections',
  "{id}/election/grid" = 'Selections.Read',
  "{id}/defects" = 'Selections',
  "{id}/defects/grid" = 'Selections.Read',
  "{id}/interview-announcement" = 'Selections',
  "{id}/interview-announcement/grid" = 'Selections.Read',
  "{id}/interview" = 'Selections',
  "{id}/interview/grid" = 'Selections.Read',
  "{id}/interview/form" = 'Selections.Add',
  "{id}/inqueries" = 'Selections',
  "{id}/inqueries/grid" = 'Selections.Read',
  "{id}/inqueries/form" = 'Selections.Add',

//   80
// :
// "Selections"
// 81
// :
// "Selections.Add"
// 82
// :
// "Selections.Update"
// 83
// :
// "Selections.Delete"
// 84
// :
// "Selections.Read"

  "utilization" = 'Utilizations',
  "/utilization/grid" = 'Utilizations.Read',


  "setting" = 'Rahian.SecurityConfiguration',
  "setting/log" = 'Rahian.SecurityLog',
  "setting/security-configuration" = 'Rahian.SecurityConfig',


  "process-connections" = 'Rahian.ProcessConnections',
  "/process-connections/form" = 'Rahian.ProcessConnections.Read',

  '/questionnaire' = 'Rahian.Questionnaires',
  '/questionnaire/grid' = 'Rahian.Questionnaires.Read',
  '/questionnaire/{id}' = 'Rahian.Questionnaires.Add || Rahian.Questionnaires.Update',

}
