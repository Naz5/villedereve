import Vue from 'vue';
import Router from 'vue-router';

import Home from "@/components/Home";
import StepsForm from "@/components/stepsForm/StepsForm";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            component: Home,
            name: 'home',
            path: '/',
        },
        {
            component: StepsForm,
            name: 'steps',
            path: '/steps',
        },
        // {
        //     path: '/account',
        //     name: 'Account',
        //     component: LoginLayout,
        //     children: [
        //         {
        //             component: () => import('./views/account/Login.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.Login')
        //             },
        //             name: 'Account.Login',
        //             path: 'login'
        //         },
        //         {
        //             component: () => import('./views/account/ForgotPassword.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.ForgotPassword')
        //             },
        //             name: 'Account.forgotPassword',
        //             path: 'forgot-password'
        //         },
        //         {
        //             component: () => import('./views/account/ForgotPasswordConfirmation.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.ForgotPassword')
        //             },
        //             name: 'Account.ForgotPasswordConfirmation',
        //             path: 'forgot-password-confirmation'
        //         },
        //         {
        //             component: () => import('./views/account/ResetPassword.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.ResetPassword')
        //             },
        //             path: 'reset-password',
        //             props: (route: Route) => {
        //                 return route.meta.props;
        //             },
        //             name: 'Account.ResetPassword',
        //             beforeEnter: (to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
        //                 Stores.userStore
        //                     .verifyResetToken({ code: to.query.c })
        //                     .then((response: any) => {
        //                         if (response.status === 200 && response.data.TokenValid) {
        //                             to.meta.props = { userId: Number(response.data.UserId) };
        //                             return next();
        //                         }
        //                         return next('/account/login');
        //                     })
        //                     .catch(() => {
        //                         return next('/account/login');
        //                     });
        //             }
        //         },
        //         {
        //             path: 'reset-password-confirmation',
        //             name: 'Account.ResetPasswordConfirmation',
        //             component: () => import('./views/account/ResetPasswordConfirmation.vue')
        //         }
        //     ]
        // },
        // {
        //     component: DefaultLayout,
        //     path: '/alerts',
        //     children: [
        //         {
        //             component: () => import('./views/alerts/AlertsHeader.vue'),
        //             name: 'Alerts.AlertsHeader',
        //             path: '/alerts',
        //             redirect: 'alerts/conversations',
        //             meta: {
        //                 label: localizer.formatMessage('Title.Alerts')
        //             },
        //             children: [
        //                 {
        //                     component: () => import('./views/alerts/components/ConversationsLayout.vue'),
        //                     props: { type: ConversationType.Conversation },
        //                     name: 'Alerts.Conversations',
        //                     path: 'conversations',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Conversations')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/alerts/components/ConversationsLayout.vue'),
        //                     props: { type: ConversationType.Approval },
        //                     name: 'Alerts.Approvals',
        //                     path: 'approvals',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Approvals')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/alerts/reminders/Index.vue'),
        //                     name: 'Alerts.Reminders',
        //                     path: 'reminders',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Reminders')
        //                     }
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     path: '/agency',
        //     name: 'Agency',
        //     component: DefaultLayout,
        //     meta: {
        //         label: localizer.formatMessage('Title.Agency')
        //     },
        //     children: [
        //         {
        //             path: 'employees',
        //             name: 'Agency.Employees.Header',
        //             component: () => import('./views/agency/employees/Header.vue'),
        //             redirect: 'employees',
        //             meta: {
        //                 label: localizer.formatMessage('Title.Employee')
        //             },
        //             children: [
        //                 {
        //                     path: ':id?',
        //                     name: 'Agency.Employees',
        //                     component: () => import('./views/agency/employees/Index.vue'),
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Employee')
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             path: 'sales-forecast',
        //             name: 'Agency.SalesForecast',
        //             component: () => import('./views/agency/salesForecast/SalesForecast.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.SalesForecast')
        //             }
        //         },
        //         {
        //             path: 'teams',
        //             component: () => import('./views/agency/teams/Header.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.Team')
        //             },
        //             children: [
        //                 {
        //                     path: '/',
        //                     name: 'Agency.Teams',
        //                     component: () => import('./views/agency/teams/Index.vue')
        //                 }
        //             ]
        //         },
        //         {
        //             path: 'timesheets/:id?',
        //             name: 'Agency.Timesheets',
        //             component: () => import('./views/agency/timesheet/Timesheet.vue'),
        //             props: (route: Route) => ({ id: Number(route.params.id) }),
        //             meta: {
        //                 label: localizer.formatMessage('Title.Timesheet')
        //             }
        //         }
        //     ]
        // },
        // {
        //     path: '/client-work',
        //     name: 'ClientWork',
        //     component: DefaultLayout,
        //     meta: {
        //         label: localizer.formatMessage('Title.ClientWork')
        //     },
        //     children: [
        //         {
        //             path: 'clients',
        //             name: 'ClientWork.Clients',
        //             component: () => import('./views/clientWork/clients/Clients.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.Client')
        //             }
        //         },
        //         {
        //             path: 'client',
        //             name: 'ClientWork.Client',
        //             redirect: 'clients',
        //             component: () => import('./views/clientWork/clients/ClientHeader.vue'),
        //             props: (route: Route) => ({ id: Number(route.params.id) }),
        //             meta: {
        //                 label: localizer.formatMessage('Title.Client')
        //             },
        //             children: [
        //                 {
        //                     path: ':id',
        //                     name: 'ClientWork.Client.ClientDetails',
        //                     component: () => import('./views/clientWork/clients/ClientDetails.vue'),
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Details')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/brands',
        //                     name: 'ClientWork.Client.ClientBrands',
        //                     component: () => import('./views/clientWork/clients/brands/ClientBrands.vue'),
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Brands')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/products',
        //                     name: 'ClientWork.Client.ClientProducts',
        //                     component: () => import('./views/clientWork/clients/products/ClientProducts.vue'),
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Products')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/contacts',
        //                     name: 'ClientWork.Client.ClientContacts',
        //                     component: () => import('./views/clientWork/entityContacts/EntityContacts.vue'),
        //                     props: (route: Route) => ({ entityId: Number(route.params.id), entityCode: EntityCode.Client }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Contacts')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/commissionDeals',
        //                     name: 'ClientWork.Client.CommissionDeals',
        //                     component: () => import('./views/clientWork/clients/commissionDeals/CommissionDeals.vue'),
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.CommissionDeals')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/discounts',
        //                     name: 'ClientWork.Client.Discounts',
        //                     component: () => import('./views/clientWork/clients/discounts/Discounts.vue'),
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Discounts')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/margins',
        //                     name: 'ClientWork.Client.Margins',
        //                     component: () => import('./views/clientWork/clients/margins/Margins.vue'),
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Margins')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/fees',
        //                     name: 'ClientWork.Client.Fees',
        //                     component: () => import('./views/clientWork/clients/fees/Fees.vue'),
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Fees')
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             path: 'campaigns',
        //             name: 'ClientWork.Campaigns',
        //             component: () => import('./views/clientWork/campaigns/Campaigns.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.Campaign')
        //             }
        //         },
        //         {
        //             name: 'ClientWork.Campaign',
        //             path: 'campaign',
        //             redirect: 'campaigns',
        //             component: () => import('./views/clientWork/campaigns/CampaignHeader.vue'),
        //             props: (route: Route) => ({ id: Number(route.params.id) }),
        //             meta: {
        //                 label: localizer.formatMessage('Title.Campaign')
        //             },
        //             children: [
        //                 {
        //                     path: ':id',
        //                     name: 'ClientWork.Campaign.Details',
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     component: () => import('./views/clientWork/campaigns/CampaignDetails.vue'),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Details')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/briefs/:documentId?',
        //                     name: 'ClientWork.Campaign.Briefs',
        //                     component: () => import('./views/clientWork/jobBriefs/JobBriefs.vue'),
        //                     props: (route: Route) => ({
        //                         jobId: Number(route.params.id), briefId: Number(route.params.documentId)
        //                     }),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Brief')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/placements',
        //                     props: (route: Route) => ({ id: Number(route.params.id), isCampaign: true }),
        //                     name: 'ClientWork.Campaign.Placements',
        //                     component: () => import('./views/clientWork/jobPlacements/JobPlacements.vue'),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Placement')
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             component: () => import('./views/clientWork/jobs/Jobs.vue'),
        //             name: 'ClientWork.Jobs',
        //             path: 'jobs',
        //             meta: {
        //                 label: localizer.formatMessage('Title.Job')
        //             }
        //         },
        //         {
        //             component: () => import('./views/clientWork/jobs/JobHeader.vue'),
        //             name: 'ClientWork.Job',
        //             path: 'job',
        //             props: (route: Route) => ({ id: Number(route.params.id) }),
        //             redirect: 'jobs',
        //             meta: {
        //                 label: localizer.formatMessage('Title.Job')
        //             },
        //             children: [
        //                 {
        //                     path: ':id',
        //                     name: 'ClientWork.Job.Details',
        //                     component: () => import('./views/clientWork/jobs/JobDetails.vue'),
        //                     props: (route: Route) => ({
        //                         id: Number(route.params.id)
        //                     }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Details')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/briefs/:documentId?',
        //                     name: 'ClientWork.Job.Briefs',
        //                     component: () => import('./views/clientWork/jobBriefs/JobBriefs.vue'),
        //                     props: (route: Route) => ({
        //                         jobId: Number(route.params.id),
        //                         briefId: Number(route.params.documentId)
        //                     }),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Brief')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/tasks',
        //                     name: 'ClientWork.Job.Tasks',
        //                     component: () => import('./views/planning/jobTasks/JobTaskList.vue'),
        //                     props: (route: Route) => ({
        //                         jobId: Number(route.params.id)
        //                     }),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Tasks')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/placements',
        //                     props: (route: Route) => ({
        //                         id: Number(route.params.id),
        //                         isCampaign: false
        //                     }),
        //                     name: 'ClientWork.Job.Placements',
        //                     component: () => import('./views/clientWork/jobPlacements/JobPlacements.vue'),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Placement')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/documents/:orderDocumentId?',
        //                     props: (route: Route) => ({
        //                         jobId: Number(route.params.id),
        //                         documentId: Number(route.params.orderDocumentId)
        //                     }),
        //                     name: 'ClientWork.Job.Documents',
        //                     component: () => import('./views/clientWork/jobDocuments/JobDocuments.vue'),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Documents')
        //                     }
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     path: '/planning',
        //     name: 'Planning',
        //     component: DefaultLayout,
        //     meta: {
        //         label: localizer.formatMessage('Title.Planning')
        //     },
        //     children: [
        //         {
        //             path: 'job-tasks',
        //             name: 'JobTasks',
        //             component: () => import('./views/planning/jobTasks/JobTask.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.JobTasks')
        //             }
        //         }
        //     ]
        // },
        // {
        //     path: '/purchasing',
        //     name: 'Purchasing',
        //     component: DefaultLayout,
        //     meta: {
        //         label: localizer.formatMessage('Title.Purchasing')
        //     },
        //     children: [
        //         {
        //             path: 'suppliers',
        //             name: 'Purchasing.Suppliers',
        //             component: () => import('./views/purchasing/suppliers/Suppliers.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.Supplier')
        //             }
        //         },
        //         {
        //             path: 'supplier',
        //             name: 'Purchasing.Supplier',
        //             redirect: 'suppliers',
        //             component: () => import('./views/purchasing/suppliers/SupplierHeader.vue'),
        //             props: (route: Route) => ({ id: Number(route.params.id) }),
        //             meta: {
        //                 label: localizer.formatMessage('Title.Supplier')
        //             },
        //             children: [
        //                 {
        //                     path: ':id',
        //                     name: 'Purchasing.Supplier.SupplierDetails',
        //                     component: () => import('./views/purchasing/suppliers/SupplierDetails.vue'),
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Details')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/platforms',
        //                     name: 'Purchasing.Supplier.SupplierPlatforms',
        //                     component: () => import('./views/purchasing/suppliers/platforms/SupplierPlatforms.vue'),
        //                     props: (route: Route) => ({ id: Number(route.params.id) }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Platforms')
        //                     }
        //                 },
        //                 {
        //                     path: ':id/contacts',
        //                     name: 'Purchasing.Supplier.SupplierContacts',
        //                     component: () => import('./views/clientWork/entityContacts/EntityContacts.vue'),
        //                     props: (route: Route) => ({ entityId: Number(route.params.id), entityCode: EntityCode.Supplier }),
        //                     meta: {
        //                         label: localizer.formatMessage('Section.Contacts')
        //                     }
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     component: DefaultLayout,
        //     path: '/reporting',
        //     children: [
        //         {
        //             component: () => import('./views/reporting/ReportingHeader.vue'),
        //             name: 'Reporting.ReportingHeader',
        //             path: '/reporting',
        //             redirect: 'reporting/time-planning',
        //             meta: {
        //                 label: localizer.formatMessage('Title.Reporting')
        //             },
        //             children: [
        //                 {
        //                     path: 'time-planning',
        //                     name: 'Reporting.TimeAndPlanning',
        //                     component: () => import('./views/reporting/time-planning/Index.vue'),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.TimeAndPlanning')
        //                     }
        //                 },
        //                 {
        //                     path: 'media',
        //                     name: 'Reporting.Media',
        //                     component: () => import('./views/reporting/media/Index.vue'),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Media')
        //                     }
        //                 },
        //                 {
        //                     path: 'jobs-wip',
        //                     name: 'Reporting.JobsAndWIP',
        //                     component: () => import('./views/reporting/jobs-wip/Index.vue'),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.JobsAndWIP')
        //                     }
        //                 },
        //                 {
        //                     path: 'financial',
        //                     name: 'Reporting.Financial',
        //                     component: () => import('./views/reporting/financial/Index.vue'),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Financial')
        //                     }
        //                 },
        //                 {
        //                     path: 'shortcuts',
        //                     name: 'Reporting.Shortcuts',
        //                     component: () => import('./views/reporting/shortcuts/Index.vue'),
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Shortcuts')
        //                     }
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     component: DefaultLayout,
        //     name: 'Settings',
        //     path: '/settings',
        //     redirect: 'settings/company-setup',
        //     meta: {
        //         label: localizer.formatMessage('Title.Settings')
        //     },
        //     children: [
        //         {
        //             component: () => import('./views/settings/clientSupplierSetup/ClientSupplierSetupHeader.vue'),
        //             name: 'Settings.ClientAndSupplierSetup',
        //             path: 'client-supplier-setup',
        //             redirect: 'client-supplier-setup/vat-types',
        //             meta: {
        //                 label: localizer.formatMessage('Title.ClientAndSupplierSetup')
        //             },
        //             children: [
        //                 {
        //                     component: () => import('./views/settings/clientSupplierSetup/vatTypes/Index.vue'),
        //                     name: 'Settings.ClientAndSupplierSetup.VatTypes',
        //                     path: 'vat-types',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.VatType')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/clientSupplierSetup/paymentTerms/Index.vue'),
        //                     name: 'Settings.ClientAndSupplierSetup.PaymentTerms',
        //                     path: 'payment-terms',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.PaymentTerms')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/labels/Labels.vue'),
        //                     name: 'Settings.ClientAndSupplierSetup.Label1',
        //                     path: 'labels/label-1',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Label')
        //                     },
        //                     props: {
        //                         labelNumber: 1,
        //                         entityCode: EntityCode.Company
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/labels/Labels.vue'),
        //                     name: 'Settings.ClientAndSupplierSetup.Label2',
        //                     path: 'labels/label-2',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Label')
        //                     },
        //                     props: {
        //                         labelNumber: 2,
        //                         entityCode: EntityCode.Company
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/labels/Labels.vue'),
        //                     name: 'Settings.ClientAndSupplierSetup.Label3',
        //                     path: 'labels/label-3',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Label')
        //                     },
        //                     props: {
        //                         labelNumber: 3,
        //                         entityCode: EntityCode.Company
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/labels/Labels.vue'),
        //                     name: 'Settings.ClientAndSupplierSetup.Label4',
        //                     path: 'labels/label-4',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Label')
        //                     },
        //                     props: {
        //                         labelNumber: 4,
        //                         entityCode: EntityCode.Company
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/labels/Labels.vue'),
        //                     name: 'Settings.ClientAndSupplierSetup.Label5',
        //                     path: 'labels/label-5',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Label')
        //                     },
        //                     props: {
        //                         labelNumber: 5,
        //                         entityCode: EntityCode.Company
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             component: () => import('./views/settings/companySetup/CompanySetupHeader.vue'),
        //             name: 'Settings.CompanySetup',
        //             path: 'company-setup',
        //             redirect: 'company-setup/companies',
        //             meta: {
        //                 label: localizer.formatMessage('Title.CompanySetup')
        //             },
        //             children: [
        //                 {
        //                     component: () => import('./views/settings/companySetup/Companies.vue'),
        //                     name: 'Settings.CompanySetup.Companies',
        //                     path: 'companies/:id?',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Companies')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/companySetup/CorporateGroups.vue'),
        //                     name: 'Settings.CompanySetup.CorporateGroups',
        //                     path: 'company-groups/:id?',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.CorporateGroup')
        //                     }
        //                 }
        //                 // {
        //                 //    path: 'departments',
        //                 //    name: 'Settings.CompanySetup.Departments',
        //                 //    component: () => import('./views/settings/companySetup/Departments.vue'),
        //                 //    meta: {
        //                 //        label: loc.formatMessage("Title.Department")
        //                 //    },
        //                 // },
        //                 // {
        //                 //    path: 'billing-categories',
        //                 //    name: 'Settings.CompanySetup.BillingCategories',
        //                 //    component: () => import('./views/settings/companySetup/CompanyDetails.vue'),
        //                 //    meta: {
        //                 //        label: loc.formatMessage("Title.BillingCategory")
        //                 //    },
        //                 // },
        //                 // {
        //                 //    path: 'more',
        //                 //    name: 'Settings.CompanySetup.More',
        //                 //    component: () => import('./views/settings/companySetup/Details.vue')
        //                 // },
        //             ]
        //         },
        //         {
        //             path: 'employee-setup',
        //             name: 'Settings.EmployeeSetup.Index',
        //             component: () => import('./views/settings/employeeSetup/Header.vue'),
        //             redirect: 'employee-setup/departments',
        //             meta: {
        //                 label: localizer.formatMessage('Title.EmployeeSetup')
        //             },
        //             children: [
        //                 {
        //                     component: () => import('./views/settings/employeeSetup/departments/Index.vue'),
        //                     name: 'Settings.EmployeeSetup.Departments',
        //                     path: 'departments',
        //                     props: true,
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Department')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/employeeSetup/levels/Index.vue'),
        //                     name: 'Settings.EmployeeSetup.Levels',
        //                     path: 'levels',
        //                     props: true,
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Level')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/employeeSetup/roles/Index.vue'),
        //                     name: 'Settings.EmployeeSetup.Roles',
        //                     path: 'roles',
        //                     props: true,
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Role')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/employeeSetup/skills/Skills.vue'),
        //                     name: 'Settings.EmployeeSetup.Skills',
        //                     path: 'skills',
        //                     props: true,
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Skill')
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             component: () => import('./views/settings/financeSetup/FinanceSetupHeader.vue'),
        //             name: 'Settings.FinanceSetup',
        //             path: 'finance-setup',
        //             redirect: 'finance-setup/accounting-periods',
        //             meta: {
        //                 label: localizer.formatMessage('Title.FinanceSetup')
        //             },
        //             children: [
        //                 {
        //                     component: () => import('./views/settings/financeSetup/accountingPeriods/Index.vue'),
        //                     name: 'Settings.FinanceSetup.AccountingPeriods',
        //                     path: 'accounting-periods',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.AccountingPeriods')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/financeSetup/billingCategories/Index.vue'),
        //                     name: 'Settings.FinanceSetup.BillingCategories',
        //                     path: 'billing-categories',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.BillingCategory')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/financeSetup/incomeTypes/IncomeTypes.vue'),
        //                     name: 'Settings.FinanceSetup.IncomeTypes',
        //                     path: 'income-types',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.IncomeType')
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             component: () => import('./views/settings/jobSetup/JobSetupHeader.vue'),
        //             name: 'Settings.JobSetup',
        //             path: 'job-setup',
        //             redirect: 'job-setup/categories',
        //             meta: {
        //                 label: localizer.formatMessage('Title.JobSetup')
        //             },
        //             children: [
        //                 {
        //                     component: () => import('./views/settings/jobSetup/categories/JobCategories.vue'),
        //                     name: 'Settings.JobSetup.Categories',
        //                     path: 'categories',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.JobCategories')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/jobSetup/subCategories/JobSubCategories.vue'),
        //                     name: 'Settings.JobSetup.SubCategories',
        //                     path: 'sub-categories',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.SubCategories')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/labels/Labels.vue'),
        //                     name: 'Settings.JobSetup.Label1',
        //                     path: 'labels/label-1',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Label')
        //                     },
        //                     props: {
        //                         labelNumber: 1,
        //                         entityCode: EntityCode.Job
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/labels/Labels.vue'),
        //                     name: 'Settings.JobSetup.Label2',
        //                     path: 'labels/label-2',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Label')
        //                     },
        //                     props: {
        //                         labelNumber: 2,
        //                         entityCode: EntityCode.Job
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/labels/Labels.vue'),
        //                     name: 'Settings.JobSetup.Label3',
        //                     path: 'labels/label-3',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Label')
        //                     },
        //                     props: {
        //                         labelNumber: 3,
        //                         entityCode: EntityCode.Job
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/labels/Labels.vue'),
        //                     name: 'Settings.JobSetup.Label4',
        //                     path: 'labels/label-4',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Label')
        //                     },
        //                     props: {
        //                         labelNumber: 4,
        //                         entityCode: EntityCode.Job
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/labels/Labels.vue'),
        //                     name: 'Settings.JobSetup.Label5',
        //                     path: 'labels/label-5',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Label')
        //                     },
        //                     props: {
        //                         labelNumber: 5,
        //                         entityCode: EntityCode.Job
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             component: () => import('./views/settings/mediaSetup/MediaSetupHeader.vue'),
        //             name: 'Settings.MediaSetup',
        //             path: 'media-setup',
        //             redirect: 'media-setup/categories',
        //             meta: {
        //                 label: localizer.formatMessage('Title.MediaSetup')
        //             },
        //             children: [
        //                 {
        //                     component: () => import('./views/settings/mediaSetup/categories/MediaCategories.vue'),
        //                     name: 'Settings.MediaSetup.Categories',
        //                     path: 'categories',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.MediaCategories')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/mediaSetup/languages/MediaLanguages.vue'),
        //                     name: 'Settings.MediaSetup.Languages',
        //                     path: 'languages',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Languages')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/mediaSetup/targetAudience/MediaTargetAudience.vue'),
        //                     name: 'Settings.MediaSetup.TargetAudiences',
        //                     path: 'target-audiences',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.TargetAudience')
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             component: () => import('./views/settings/rateCard/RateCardSetupHeader.vue'),
        //             name: 'Settings.RateCardSetupHeader',
        //             path: 'rate-card-setup',
        //             redirect: 'rate-card-setup/rate-cards',
        //             meta: {
        //                 label: localizer.formatMessage('Title.RateCardSetup')
        //             },
        //             children: [
        //                 {
        //                     component: () => import('./views/settings/rateCard/RateCard.vue'),
        //                     name: 'Settings.RateCards',
        //                     path: 'rate-cards',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.RateCard')
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             component: () => import('./views/settings/workTypesAndPhases/WorkTypesAndPhasesHeader.vue'),
        //             name: 'Settings.WorkTypesAndPhases',
        //             path: 'work-types-phases',
        //             redirect: 'work-types-phases/client-tasks',
        //             meta: {
        //                 label: localizer.formatMessage('Title.WorkTypesAndPhases')
        //             },
        //             children: [
        //                 {
        //                     component: () => import('./views/settings/workTypesAndPhases/clientTasks/ClientTasks.vue'),
        //                     name: 'Settings.WorkTypesAndPhases.ClientTasks',
        //                     path: 'client-tasks',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.ClientTasks')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/workTypesAndPhases/feesCosts/FeesCosts.vue'),
        //                     name: 'Settings.WorkTypesAndPhases.FeesCosts',
        //                     path: 'fees-costs',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.FeesCosts')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/workTypesAndPhases/nonClientTasks/NonClientTasks.vue'),
        //                     name: 'Settings.WorkTypesAndPhases.NonClientTasks',
        //                     path: 'non-client-tasks',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.NonClientTasks')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/workTypesAndPhases/mediaTypes/MediaTypes.vue'),
        //                     name: 'Settings.WorkTypesAndPhases.MediaTypes',
        //                     path: 'media-types',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Media')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/workTypesAndPhases/workTypeCategories/WorkTypeCategories.vue'),
        //                     name: 'Settings.WorkTypesAndPhases.WorkTypeCategories',
        //                     path: 'work-type-categories',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.WorkTypeCategories')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/workTypesAndPhases/phases/Phases.vue'),
        //                     name: 'Settings.WorkTypesAndPhases.Phases',
        //                     path: 'phases',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Phases')
        //                     }
        //                 }
        //             ]
        //         },
        //         {
        //             path: 'rate-card-setup',
        //             name: 'Settings.RateCardSetup.Index',
        //             component: () => import('./views/settings/rateCard/RateCard.vue'),
        //             meta: {
        //                 label: localizer.formatMessage('Title.RateCard')
        //             }
        //         },
        //         {
        //             component: () => import('./views/settings/systemSetup/SystemSetupHeader.vue'),
        //             name: 'Settings.SystemSetup',
        //             path: 'system-setup',
        //             redirect: 'system-setup/integrations',
        //             meta: {
        //                 label: localizer.formatMessage('Title.SystemSetup')
        //             },
        //             children: [
        //                 {
        //                     component: () => import('./views/settings/systemSetup/linkSetup/LinkSetup.vue'),
        //                     name: 'Settings.SystemSetup.Integrations',
        //                     path: 'integrations/:id?',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.Integrations')
        //                     }
        //                 },
        //                 {
        //                     component: () => import('./views/settings/autoNumberSetup/AutoNumbers.vue'),
        //                     name: 'Settings.SystemSetup.AutoNumbers',
        //                     path: 'auto-numbers/:id?',
        //                     meta: {
        //                         label: localizer.formatMessage('Title.AutoNumber')
        //                     }
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     path: '*',
        //     redirect: '/404'
        // },
        // {
        //     path: '/404',
        //     name: '404',
        //     component: () => import('./views/error/NotFound.vue'),
        //     meta: {
        //         label: localizer.formatMessage('Title.PageNotFound')
        //     }
        // }
    ]
});

export default router;