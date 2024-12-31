/* eslint-disable */
export default async () => {
    const t = {
        ["./app/common/cards/card.entity"]: await import("./app/common/cards/card.entity"),
        ["../../shared/src/lib/cards/index"]: await import("../../shared/src/lib/cards/index"),
        ["./app/common/users/user.entity"]: await import("./app/common/users/user.entity"),
        ["./app/common/projects/project.entity"]: await import("./app/common/projects/project.entity"),
        ["./app/common/projects/project-users/project.user.entity"]: await import("./app/common/projects/project-users/project.user.entity"),
        ["./app/common/workspaces/workspace.entity"]: await import("./app/common/workspaces/workspace.entity"),
        ["../../shared/src/lib/fields/index"]: await import("../../shared/src/lib/fields/index"),
        ["./app/common/card-types/card.type.entity"]: await import("./app/common/card-types/card.type.entity"),
        ["./app/common/lists/list.entity"]: await import("./app/common/lists/list.entity"),
        ["./app/common/fields/field.entity"]: await import("./app/common/fields/field.entity"),
        ["../../shared/src/lib/card-types/index"]: await import("../../shared/src/lib/card-types/index"),
        ["./app/common/workspaces/types"]: await import("./app/common/workspaces/types"),
        ["../../shared/src/lib/auth/index"]: await import("../../shared/src/lib/auth/index"),
        ["./app/common/spaces/space.entity"]: await import("./app/common/spaces/space.entity"),
        ["./app/common/cards/card-lists/card.list.entity"]: await import("./app/common/cards/card-lists/card.list.entity"),
        ["./app/common/views/types"]: await import("./app/common/views/types"),
        ["../../shared/src/lib/lists/list.groups"]: await import("../../shared/src/lib/lists/list.groups"),
        ["./app/common/lists/types"]: await import("./app/common/lists/types"),
        ["../../shared/src/lib/lists/lists"]: await import("../../shared/src/lib/lists/lists"),
        ["./app/common/lists/list-stages/list.stage.entity"]: await import("./app/common/lists/list-stages/list.stage.entity"),
        ["./app/common/lists/list-groups/list.group.entity"]: await import("./app/common/lists/list-groups/list.group.entity"),
        ["./app/common/views/view.entity"]: await import("./app/common/views/view.entity"),
        ["./app/common/cards/card-activities/card.activity.entity"]: await import("./app/common/cards/card-activities/card.activity.entity"),
        ["./app/common/projects/project-users/dto/create.project.user.dto"]: await import("./app/common/projects/project-users/dto/create.project.user.dto"),
        ["../../shared/src/lib/views/views"]: await import("../../shared/src/lib/views/views"),
        ["./app/common/filters/types"]: await import("./app/common/filters/types"),
        ["./app/common/mailer/types"]: await import("./app/common/mailer/types"),
        ["./app/common/files/types"]: await import("./app/common/files/types"),
        ["./app/common/filters/filter.entity"]: await import("./app/common/filters/filter.entity"),
        ["./app/common/files/file.entity"]: await import("./app/common/files/file.entity")
    };
    return { "@nestjs/swagger": { "models": [[import("./app/common/cards/card-activities/card.activity.entity"), { "CardActivity": { id: { required: true, type: () => Number }, card: { required: true, type: () => t["./app/common/cards/card.entity"].Card }, type: { required: true, enum: t["../../shared/src/lib/cards/index"].ActivityType }, content: { required: true, type: () => Object }, createdBy: { required: true, type: () => t["./app/common/users/user.entity"].User }, createdAt: { required: true, type: () => Date } } }], [import("./app/common/projects/project-users/project.user.entity"), { "ProjectUser": { id: { required: true, type: () => Number }, project: { required: true, type: () => t["./app/common/projects/project.entity"].Project }, user: { required: true, type: () => t["./app/common/users/user.entity"].User }, role: { required: true, type: () => String }, createdAt: { required: true, type: () => Date } } }], [import("./app/common/projects/project.entity"), { "Project": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, ownerId: { required: true, type: () => Number }, inviteCode: { required: true, type: () => String }, userUploadLimit: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, users: { required: true, type: () => [t["./app/common/projects/project-users/project.user.entity"].ProjectUser] }, workspaces: { required: true, type: () => [t["./app/common/workspaces/workspace.entity"].Workspace] } } }], [import("./app/common/fields/field.entity"), { "Field": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, slug: { required: true, type: () => String }, isTitle: { required: true, type: () => Boolean, description: "Defines whether this field is the main title field of the entity." }, isDescription: { required: true, type: () => Boolean, description: "Defines whether this field is the main description field of the entity." }, isPhoto: { required: true, type: () => Boolean, description: "Defines whether this field is the main photo field of the entity." }, isAssignee: { required: true, type: () => Boolean, description: "Defines whether this field is the main assignee field of the entity." }, isPinned: { required: true, type: () => Boolean, description: "Pinned fields appear in the views and the create card dialog." }, type: { required: true, enum: t["../../shared/src/lib/fields/index"].FieldTypes }, icon: { required: true, type: () => String }, required: { required: true, type: () => Boolean }, multiple: { required: true, type: () => Boolean }, items: { required: false, type: () => [Object], description: "Contains the items for dropdown fields." }, cardType: { required: true, type: () => t["./app/common/card-types/card.type.entity"].CardType, description: "Defines whether this is an entity-specific field." }, dataCardType: { required: true, type: () => t["./app/common/card-types/card.type.entity"].CardType, description: "Defines the card type that shows as the field items." }, createdByType: { required: true, type: () => Object }, createdBy: { required: true, type: () => t["./app/common/users/user.entity"].User }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, workspace: { required: true, type: () => t["./app/common/workspaces/workspace.entity"].Workspace }, lists: { required: true, type: () => [t["./app/common/lists/list.entity"].List] } } }], [import("./app/common/card-types/card.type.entity"), { "CardType": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, workspace: { required: true, type: () => t["./app/common/workspaces/workspace.entity"].Workspace }, fields: { required: true, type: () => [t["./app/common/fields/field.entity"].Field] }, hasChildren: { required: true, type: () => Boolean }, layout: { required: true, enum: t["../../shared/src/lib/card-types/index"].CardTypeLayout }, createdByType: { required: true, type: () => Object }, createdBy: { required: true, type: () => t["./app/common/users/user.entity"].User }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date } } }], [import("./app/common/workspaces/workspace.entity"), { "Workspace": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, ownerId: { required: true, type: () => Number }, type: { required: true, enum: t["./app/common/workspaces/types"].WorkspaceTypes }, accessType: { required: true, enum: t["../../shared/src/lib/auth/index"].AccessType }, currency: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, project: { required: true, type: () => [t["./app/common/projects/project.entity"].Project] }, projectId: { required: true, type: () => Number }, spaces: { required: true, type: () => [t["./app/common/spaces/space.entity"].Space] }, users: { required: true, type: () => [t["./app/common/users/user.entity"].User] }, cardTypes: { required: true, type: () => [t["./app/common/card-types/card.type.entity"].CardType] }, defaultCardType: { required: true, type: () => t["./app/common/card-types/card.type.entity"].CardType } } }], [import("./app/common/spaces/space.entity"), { "Space": { id: { required: true, type: () => Number }, icon: { required: true, type: () => String }, iconColor: { required: true, type: () => String }, name: { required: true, type: () => String }, accessType: { required: true, enum: t["../../shared/src/lib/auth/index"].AccessType }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, workspace: { required: true, type: () => t["./app/common/workspaces/workspace.entity"].Workspace }, workspaceId: { required: true, type: () => Number }, lists: { required: true, type: () => [t["./app/common/lists/list.entity"].List] } } }], [import("./app/common/lists/list-stages/list.stage.entity"), { "ListStage": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, color: { required: true, type: () => String }, order: { required: true, type: () => Number }, isCompleted: { required: true, type: () => Boolean, description: "When set to true, sets card\nas closed when it is moved to it." }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, list: { required: true, type: () => t["./app/common/lists/list.entity"].List }, listId: { required: true, type: () => Number }, cardLists: { required: true, type: () => [t["./app/common/cards/card-lists/card.list.entity"].CardList] } } }], [import("./app/common/views/view.entity"), { "View": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, type: { required: true, enum: t["./app/common/views/types"].ViewTypes }, options: { required: true, type: () => Object }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, list: { required: true, type: () => t["./app/common/lists/list.entity"].List }, listId: { required: true, type: () => Number }, filters: { required: false, type: () => Object } } }], [import("./app/common/lists/list-groups/list.group.entity"), { "ListGroup": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, type: { required: true, enum: t["../../shared/src/lib/lists/list.groups"].ListGroupOptions }, entityId: { required: true, type: () => Number }, entityType: { required: true, enum: t["./app/common/lists/types"].ListGroupEntityTypes }, isExpanded: { required: true, type: () => Boolean, description: "TODO move this to view level" }, color: { required: true, type: () => String }, order: { required: true, type: () => Number }, icon: { required: true, type: () => String }, filter: { required: false, type: () => Object }, field: { required: true, type: () => t["./app/common/fields/field.entity"].Field }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, list: { required: true, type: () => t["./app/common/lists/list.entity"].List } } }], [import("./app/common/lists/list.entity"), { "List": { id: { required: true, type: () => Number }, icon: { required: true, type: () => String }, iconColor: { required: true, type: () => String }, name: { required: true, type: () => String }, accessType: { required: true, enum: t["../../shared/src/lib/auth/index"].AccessType }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: false, type: () => Date }, space: { required: true, type: () => t["./app/common/spaces/space.entity"].Space }, spaceId: { required: true, type: () => Number }, workspace: { required: true, type: () => t["./app/common/workspaces/workspace.entity"].Workspace }, workspaceId: { required: true, type: () => Number }, type: { required: true, enum: t["../../shared/src/lib/lists/lists"].ListType }, slug: { required: true, type: () => String }, listStages: { required: true, type: () => [t["./app/common/lists/list-stages/list.stage.entity"].ListStage] }, listGroups: { required: true, type: () => [t["./app/common/lists/list-groups/list.group.entity"].ListGroup] }, cardLists: { required: true, type: () => [t["./app/common/cards/card-lists/card.list.entity"].CardList] }, views: { required: true, type: () => [t["./app/common/views/view.entity"].View] }, defaultCardType: { required: true, type: () => t["./app/common/card-types/card.type.entity"].CardType }, fields: { required: true, type: () => [t["./app/common/fields/field.entity"].Field] } } }], [import("./app/common/cards/card-lists/card.list.entity"), { "CardList": { id: { required: true, type: () => Number }, listStage: { required: true, type: () => t["./app/common/lists/list-stages/list.stage.entity"].ListStage }, listStageId: { required: true, type: () => Number }, card: { required: true, type: () => t["./app/common/cards/card.entity"].Card }, list: { required: true, type: () => t["./app/common/lists/list.entity"].List }, listId: { required: true, type: () => Number }, order: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./app/common/cards/card.entity"), { "Card": { id: { required: true, type: () => Number }, type: { required: true, type: () => t["./app/common/card-types/card.type.entity"].CardType }, data: { required: true, type: () => Object }, cardLists: { required: true, type: () => [t["./app/common/cards/card-lists/card.list.entity"].CardList] }, users: { required: true, type: () => [t["./app/common/users/user.entity"].User] }, activities: { required: true, type: () => [t["./app/common/cards/card-activities/card.activity.entity"].CardActivity] }, createdBy: { required: true, type: () => t["./app/common/users/user.entity"].User }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, parent: { required: false, type: () => t["./app/common/cards/card.entity"].Card }, children: { required: true, type: () => [t["./app/common/cards/card.entity"].Card] }, workspace: { required: true, type: () => t["./app/common/workspaces/workspace.entity"].Workspace } } }], [import("./app/common/users/user.entity"), { "User": { id: { required: true, type: () => Number, description: "The unique identifier for the user." }, email: { required: true, type: () => String, description: "The user's email address. It can also be set to unique if you desire." }, password: { required: true, type: () => String, description: "The hashed password for the user. It is stored in a secure way using bcrypt." }, firstName: { required: true, type: () => String, description: "The first name of the user." }, lastName: { required: true, type: () => String, description: "The last name of the user." }, phoneNumber: { required: true, type: () => String, description: "The user's phone number." }, country: { required: true, type: () => String, description: "The user's country (ISO2 code)" }, photo: { required: true, type: () => String, description: "The photo URL of the user." }, roles: { required: true, type: () => [String], description: "The roles assigned to the user. It can represent different permission levels." }, onboarding: { required: true, type: () => Object, description: "Holds general data from the user's onboarding" }, createdAt: { required: true, type: () => Date, description: "A timestamp representing when the user account was created." }, updatedAt: { required: true, type: () => Date, description: "A timestamp representing when the user account was last updated." }, deletedAt: { required: true, type: () => Date }, projects: { required: true, type: () => [t["./app/common/projects/project-users/project.user.entity"].ProjectUser], description: "A relationship to the ProjectUser entity representing the user's projects." }, cards: { required: true, type: () => [t["./app/common/cards/card.entity"].Card], description: "A relationship to the Card entity representing the user's cards." }, project: { required: true, type: () => t["./app/common/projects/project.entity"].Project, description: "The user's current active project." } } }], [import("./app/common/users/dto/create.user.dto"), { "CreateUserDto": { firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, phoneNumber: { required: false, type: () => String }, country: { required: false, type: () => String }, inviteCode: { required: false, type: () => String } } }], [import("./app/common/users/dto/update.user.dto"), { "UpdateUserDto": {} }], [import("./app/common/projects/project-users/dto/create.project.user.dto"), { "CreateProjectUserDto": { user: { required: true, type: () => t["./app/common/users/user.entity"].User }, role: { required: true, type: () => String }, project: { required: true, type: () => t["./app/common/projects/project.entity"].Project } } }], [import("./app/common/projects/dto/create.project.dto"), { "CreateProjectDto": { name: { required: true, type: () => String }, ownerId: { required: false, type: () => Number }, users: { required: false, type: () => [t["./app/common/projects/project-users/dto/create.project.user.dto"].CreateProjectUserDto] } } }], [import("./app/common/projects/dto/update.project.dto"), { "UpdateProjectDto": {} }], [import("./app/common/projects/project-users/dto/update.project.user.dto"), { "UpdateProjectUserDto": {} }], [import("./app/common/auth/entities/access.control.entity"), { "AccessControl": { id: { required: true, type: () => Number }, user: { required: true, type: () => t["./app/common/users/user.entity"].User }, permissionLevel: { required: true, enum: t["../../shared/src/lib/auth/index"].PermissionLevel }, project: { required: false, type: () => t["./app/common/projects/project.entity"].Project }, workspace: { required: false, type: () => t["./app/common/workspaces/workspace.entity"].Workspace }, space: { required: false, type: () => t["./app/common/spaces/space.entity"].Space }, list: { required: false, type: () => t["./app/common/lists/list.entity"].List }, createdAt: { required: true, type: () => Date } } }], [import("./app/common/cards/dto/create.card.dto"), { "CreateCardDto": { listId: { required: true, type: () => Number }, listStageId: { required: false, type: () => Number }, listStage: { required: false, type: () => t["./app/common/lists/list-stages/list.stage.entity"].ListStage }, type: { required: true, type: () => Number }, workspaceId: { required: true, type: () => Number }, createdBy: { required: true, type: () => Number }, parentId: { required: false, type: () => Number } } }], [import("./app/common/cards/dto/update.card.dto"), { "UpdateCardDto": {} }], [import("./app/common/cards/card-lists/dto/create.card.list.dto"), { "CreateCardListDto": { cardId: { required: true, type: () => Number }, listId: { required: true, type: () => Number }, listStageId: { required: true, type: () => Number }, order: { required: false, type: () => Number } } }], [import("./app/common/cards/card-lists/dto/update.card.list.dto"), { "UpdateCardListDto": {} }], [import("./app/common/cards/card-activities/dto/create.card.activity.dto"), { "CreateCardActivityDto": { card: { required: true, type: () => Number }, type: { required: true, enum: t["../../shared/src/lib/cards/index"].ActivityType }, content: { required: true, type: () => Object }, createdBy: { required: true, type: () => t["./app/common/users/user.entity"].User } } }], [import("./app/common/cards/card-activities/dto/update.card.activity.dto"), { "UpdateCardActivityDto": {} }], [import("./app/common/spaces/dto/create.space.dto"), { "CreateSpaceDto": { icon: { required: false, type: () => String }, iconColor: { required: false, type: () => String }, name: { required: true, type: () => String }, workspaceId: { required: true, type: () => Number }, createOnboardingData: { required: false, type: () => Boolean } } }], [import("./app/common/spaces/dto/update.space.dto"), { "UpdateSpaceDto": {} }], [import("./app/common/lists/dto/create.list.dto"), { "CreateListDto": { icon: { required: false, type: () => String }, iconColor: { required: false, type: () => String }, name: { required: true, type: () => String }, spaceId: { required: false, type: () => Number }, workspaceId: { required: false, type: () => Number }, defaultCardType: { required: true, type: () => t["./app/common/card-types/card.type.entity"].CardType }, createDefaultStages: { required: false, type: () => Boolean }, defaultViewType: { required: false, enum: t["../../shared/src/lib/views/views"].ViewTypes }, type: { required: false, enum: t["../../shared/src/lib/lists/lists"].ListType } } }], [import("./app/common/lists/dto/update.list.dto"), { "UpdateListDto": {} }], [import("./app/common/lists/list-stages/dto/create.list.stage.dto"), { "CreateListStageDto": { name: { required: true, type: () => String }, listId: { required: true, type: () => Number }, color: { required: true, type: () => String }, order: { required: true, type: () => Number }, isCompleted: { required: false, type: () => Boolean } } }], [import("./app/common/lists/list-stages/dto/update.list.stage.dto"), { "UpdateListStageDto": {} }], [import("./app/common/views/dto/create.view.dto"), { "CreateViewDto": { name: { required: true, type: () => String }, type: { required: true, enum: t["../../shared/src/lib/views/views"].ViewTypes }, listId: { required: true, type: () => Number }, options: { required: false, type: () => Object } } }], [import("./app/common/views/dto/update.view.dto"), { "UpdateViewDto": {} }], [import("./app/common/lists/list-groups/dto/create.list.group.dto"), { "CreateListGroupDto": { name: { required: false, type: () => String }, filter: { required: false, type: () => Object }, type: { required: true, enum: t["../../shared/src/lib/lists/list.groups"].ListGroupOptions }, entityId: { required: false, type: () => Number }, entityType: { required: false, enum: t["./app/common/lists/types"].ListGroupEntityTypes }, color: { required: false, type: () => String }, icon: { required: false, type: () => String }, order: { required: false, type: () => Number }, isExpanded: { required: false, type: () => Boolean }, fieldId: { required: false, type: () => Number }, listId: { required: false, type: () => Number } } }], [import("./app/common/lists/list-groups/dto/update.list.group.dto"), { "UpdateListGroupDto": {} }], [import("./app/common/fields/dto/create.field.dto"), { "CreateFieldDto": { name: { required: true, type: () => String }, slug: { required: true, type: () => String }, type: { required: true, enum: t["../../shared/src/lib/fields/index"].FieldTypes }, cardTypeId: { required: false, type: () => Number }, dataCardTypeId: { required: false, type: () => Number }, icon: { required: true, type: () => String }, workspaceId: { required: true, type: () => Number }, required: { required: false, type: () => Boolean, default: false }, multiple: { required: false, type: () => Boolean, default: false }, items: { required: false, type: () => [Object] }, createdByType: { required: false, type: () => Object }, createdBy: { required: false, type: () => t["./app/common/users/user.entity"].User } } }], [import("./app/common/fields/dto/update.field.dto"), { "UpdateFieldDto": {} }], [import("./app/common/filters/filter.entity"), { "Filter": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, where: { required: true, type: () => Object }, entityId: { required: true, type: () => Number }, entityType: { required: true, enum: t["./app/common/filters/types"].FilterEntityTypes }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./app/common/workspaces/dto/create.workspace.dto"), { "CreateWorkspaceDto": { name: { required: true, type: () => String }, ownerId: { required: false, type: () => Number }, type: { required: true, enum: t["./app/common/workspaces/types"].WorkspaceTypes }, accessType: { required: true, enum: t["../../shared/src/lib/auth/index"].AccessType }, projectId: { required: true, type: () => Number }, createOnboardingData: { required: false, type: () => Boolean } } }], [import("./app/common/workspaces/dto/update.workspace.dto"), { "UpdateWorkspaceDto": {} }], [import("./app/common/card-types/dto/create.card.type.dto"), { "CreateCardTypeDto": { name: { required: true, type: () => String }, workspaceId: { required: true, type: () => Number }, layout: { required: false, enum: t["../../shared/src/lib/card-types/index"].CardTypeLayout }, hasChildren: { required: false, type: () => Boolean }, workspace: { required: false, type: () => t["./app/common/workspaces/workspace.entity"].Workspace }, createdBy: { required: false, type: () => t["./app/common/users/user.entity"].User }, createdByType: { required: false, type: () => Object }, fields: { required: false, type: () => [Object] } } }], [import("./app/common/card-types/dto/update.card.type.dto"), { "UpdateCardTypeDto": {} }], [import("./app/common/filters/dto/create.filter.dto"), { "CreateFilterDto": { name: { required: false, type: () => String }, entityId: { required: false, type: () => Number }, entityType: { required: false, enum: t["./app/common/filters/types"].FilterEntityTypes } } }], [import("./app/common/filters/dto/update.filter.dto"), { "UpdateFilterDto": {} }], [import("./app/common/mailer/email.entity"), { "Email": { id: { required: true, type: () => String }, to: { required: true, type: () => String }, subject: { required: true, type: () => String }, body: { required: true, type: () => String }, status: { required: true, enum: t["./app/common/mailer/types"].EmailStatus }, openTimes: { required: true, type: () => [String] }, openCount: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./app/common/files/file.entity"), { "TWFile": { id: { required: true, type: () => String }, name: { required: true, type: () => String, description: "The original file name, used for display on the frontend." }, key: { required: true, type: () => String, description: "The file name prepended with upload time timestamp." }, url: { required: true, type: () => String, description: "The full URL of the file." }, type: { required: true, description: "Used to render image and other files differently.", enum: t["./app/common/files/types"].TWFileType }, size: { required: true, type: () => Number, description: "Holds file size in bytes." }, createdBy: { required: true, type: () => t["./app/common/users/user.entity"].User }, project: { required: true, type: () => t["./app/common/projects/project.entity"].Project }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date } } }], [import("./app/common/files/dtos/create.file.dto"), { "CreateFileDto": { name: { required: true, type: () => String }, key: { required: true, type: () => String }, url: { required: false, type: () => String }, type: { required: true, enum: t["./app/common/files/types"].TWFileType }, size: { required: true, type: () => Number }, createdBy: { required: true, type: () => t["./app/common/users/user.entity"].User }, projectId: { required: true, type: () => Number } } }], [import("./app/common/files/dtos/update.file.dto"), { "UpdateFileDto": {} }]], "controllers": [[import("./app/common/users/users.controller"), { "UsersController": { "findAll": { type: Object }, "findOne": { type: t["./app/common/users/user.entity"].User }, "create": { type: t["./app/common/users/user.entity"].User }, "update": { type: t["./app/common/users/user.entity"].User }, "remove": {} } }], [import("./app/common/auth/auth.controller"), { "AuthController": { "login": { description: "Logs the user in with email and password", type: Object }, "register": { type: Object }, "registerWithInvite": { type: Object }, "joinInvitation": { type: Object } } }], [import("./app/common/projects/projects.controller"), { "ProjectsController": { "findAll": { type: [t["./app/common/projects/project.entity"].Project] }, "findOne": { type: t["./app/common/projects/project.entity"].Project }, "create": { type: t["./app/common/projects/project.entity"].Project }, "update": { type: t["./app/common/projects/project.entity"].Project }, "remove": {}, "findOneByInviteCode": { type: t["./app/common/projects/project.entity"].Project } } }], [import("./app/common/projects/project-users/project.users.controller"), { "ProjectUsersController": { "findAll": { type: [t["./app/common/projects/project-users/project.user.entity"].ProjectUser] }, "findOne": { type: t["./app/common/projects/project-users/project.user.entity"].ProjectUser }, "create": { type: t["./app/common/projects/project-users/project.user.entity"].ProjectUser }, "update": { type: t["./app/common/projects/project-users/project.user.entity"].ProjectUser }, "remove": {} } }], [import("./app/common/cards/cards.controller"), { "CardsController": { "search": { type: [t["./app/common/cards/card.entity"].Card] }, "findAll": { type: Object }, "findOne": { type: t["./app/common/cards/card.entity"].Card }, "create": { type: t["./app/common/cards/card.entity"].Card }, "update": { type: t["./app/common/cards/card.entity"].Card }, "remove": {} } }], [import("./app/common/cards/card-lists/card.lists.controller"), { "CardListssController": { "updateCardList": { type: t["./app/common/cards/card-lists/card.list.entity"].CardList } } }], [import("./app/common/cards/card-activities/card.activities.controller"), { "CardActivitiesController": { "find": { type: [t["./app/common/cards/card-activities/card.activity.entity"].CardActivity] }, "create": { type: t["./app/common/cards/card-activities/card.activity.entity"].CardActivity }, "update": { type: t["./app/common/cards/card-activities/card.activity.entity"].CardActivity }, "delete": {} } }], [import("./app/common/spaces/spaces.controller"), { "SpacesController": { "findAll": { type: [t["./app/common/spaces/space.entity"].Space] }, "findOne": { type: t["./app/common/spaces/space.entity"].Space }, "create": { type: t["./app/common/spaces/space.entity"].Space }, "update": { type: t["./app/common/spaces/space.entity"].Space }, "remove": {} } }], [import("./app/common/lists/lists.controller"), { "ListsController": { "findAll": { type: [t["./app/common/lists/list.entity"].List] }, "findOne": { type: t["./app/common/lists/list.entity"].List }, "create": { type: t["./app/common/lists/list.entity"].List }, "update": { type: t["./app/common/lists/list.entity"].List }, "remove": {} } }], [import("./app/common/lists/list-groups/list.groups.controller"), { "ListGroupsController": { "generateGroups": { type: [t["./app/common/lists/list-groups/list.group.entity"].ListGroup] }, "updateGroup": { type: t["./app/common/lists/list-groups/list.group.entity"].ListGroup } } }], [import("./app/common/lists/list-stages/list.stages.controller"), { "ListStagesController": { "findStages": { type: [t["./app/common/lists/list-stages/list.stage.entity"].ListStage] }, "findOne": { type: t["./app/common/lists/list-stages/list.stage.entity"].ListStage }, "create": { type: t["./app/common/lists/list-stages/list.stage.entity"].ListStage }, "reorder": { type: [t["./app/common/lists/list-stages/list.stage.entity"].ListStage] }, "update": { type: t["./app/common/lists/list-stages/list.stage.entity"].ListStage }, "remove": {} } }], [import("./app/common/fields/fields.controller"), { "FieldsController": { "findAll": { type: [t["./app/common/fields/field.entity"].Field] }, "findOne": { type: t["./app/common/fields/field.entity"].Field }, "create": { type: t["./app/common/fields/field.entity"].Field }, "update": { type: t["./app/common/fields/field.entity"].Field }, "remove": {} } }], [import("./app/common/views/views.controller"), { "ViewsController": { "findAll": { type: [t["./app/common/views/view.entity"].View] }, "findOne": { type: t["./app/common/views/view.entity"].View }, "create": { type: t["./app/common/views/view.entity"].View }, "update": { type: t["./app/common/views/view.entity"].View }, "remove": {} } }], [import("./app/common/workspaces/workspaces.controller"), { "WorkspacesController": { "findAll": { type: [t["./app/common/workspaces/workspace.entity"].Workspace] }, "findOne": { type: t["./app/common/workspaces/workspace.entity"].Workspace }, "create": { type: t["./app/common/workspaces/workspace.entity"].Workspace }, "update": { type: t["./app/common/workspaces/workspace.entity"].Workspace }, "remove": {} } }], [import("./app/common/card-types/card.types.controller"), { "CardTypesController": { "findAll": { type: [t["./app/common/card-types/card.type.entity"].CardType] }, "findOne": { type: t["./app/common/card-types/card.type.entity"].CardType }, "create": { type: t["./app/common/card-types/card.type.entity"].CardType }, "update": { type: t["./app/common/card-types/card.type.entity"].CardType }, "remove": {} } }], [import("./app/common/filters/filters.controller"), { "FiltersController": { "findAll": { type: Object }, "findOne": { type: t["./app/common/filters/filter.entity"].Filter }, "create": { type: t["./app/common/filters/filter.entity"].Filter }, "update": { type: t["./app/common/filters/filter.entity"].Filter }, "remove": {} } }], [import("./app/common/mailer/mailer.controller"), { "MailerController": { "sendMentionNotificationEmail": {}, "trackEmailOpen": { type: Object } } }], [import("./app/common/files/files.controller"), { "FilesController": { "getFile": {}, "uploadFile": { type: t["./app/common/files/file.entity"].TWFile } } }]] } };
};